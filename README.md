# qp-assessment

Didn't remove .env file for better connection.

**Attached postman collection for running APIs. Here are the APIs and their structure.
**

 /auth/register - POST
 payload = {
   email : string, 
   password: string, 
   role: string
}

 /auth/login - POST
 payload = {
   email : string, 
   password: string, 
}

/groceries - POST
token,
payload = {
  name: string,
  description: string,
  price: number
}

/groceries/:itemId - PATCH
token,
payload = {
  name: string,
  description: string,
  price: number
}

/groceries/:itemId - DELETE
token

/groceries - GET
token

/cart - POST
token
payload = {
  items: [
        {
            grocery_id: number,
            quantity: number
        },
    ]
}
 
/cart - PATCH
token,
payload = {
  items: [
        {
            grocery_id: number,
            quantity: number
        },
    ]
} 

/cart - GET
token

/place-order - POST
token,
payload = {
    cartId: number
}




Docker Commands - 

1. docker build -t grocery .
2. docker run -p 8080:8080 grocery

