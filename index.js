require("dotenv").config();
const express = require('express')
const app = express()
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;

const schemes_routes = require("./routes/schemes")

app.get('/',(req,res)=>{
   res.send("welcome")
});

app.use("/api/schemes",schemes_routes);


const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
        //    console.log(`I am connected`); 
        });
    } catch(error){
        console.log(error);
    }
}

start();

