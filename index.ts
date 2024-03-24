import express, { Request, Response } from "express";
import { connection } from "./config/DB";
import cors from "cors";
import { authRoute } from "./routes/auth.route";
import { groceryRoute } from "./routes/grocery.route";
import { cartRoute } from "./routes/cart.route";
import { orderRoute } from "./routes/order.route";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Home page');
});

app.use('/auth', authRoute);
app.use('/groceries', groceryRoute);
app.use('/cart', cartRoute);
app.use('/place-order', orderRoute);

app.listen(PORT, async () => {
    console.log(`Server listening on ${PORT}`);
    try {
        await connection;
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Problem in DB connection ", (err as Error).message);
    }
});
