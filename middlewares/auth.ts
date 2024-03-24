import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';
import { UserModel } from '../models/user.model';
import { roleRights } from '../utils/constants/roles';
import { CustomRequest } from '../utils/constants/types';

const checkUserRight = (requiredRights: string[], user: any, req: CustomRequest): boolean => {
    if (requiredRights.length === 0) return true;

    const userRights = roleRights.get(user.role);
    if (!userRights) return false;

    return requiredRights.every((requiredRight) => userRights.includes(requiredRight));
};

const auth = (...requiredRights: string[]) => async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers?.authorization?.split(" ")[1];

    try {
        if (!token) throw new Error("Missing token");
        
        const decoded: JwtPayload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const user = await UserModel.findOne({ _id: decoded.userId });

        if (!user) throw new Error("User not found");
        
        if (!checkUserRight(requiredRights, user, req) && req.params.userId !== user.id) {
            return res.status(401).send({ msg: "Not authorized" });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).send({ msg: "Please authenticate" });
    }
};

export default auth;
