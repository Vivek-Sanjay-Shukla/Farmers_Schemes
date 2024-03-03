require("dotenv").config();
const connectDB = require("./db/connect");
const Scheme = require("./models/scheme")

const SchemeJson = require("./schemes.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Scheme.create(SchemeJson)
        console.log("success");
    }catch(error){
        if (error.name === "MongoServerError" && error.code === 11000) {
            // Duplicate key error
            const duplicateKeyField = Object.keys(error.keyPattern)[0];
            const duplicateKeyValue = error.keyValue[duplicateKeyField];
            console.error(`Duplicate key error for ${duplicateKeyField}: ${duplicateKeyValue}`);
            // Handle duplicate key error, e.g., log it or provide a user-friendly response
        } else {
            console.error("Error during startup:", error);
        }
    }
}

start();