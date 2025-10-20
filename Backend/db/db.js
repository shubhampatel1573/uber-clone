const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch((err)=>{
        console.error("mongodb connection error", err)
    })
}

module.exports = connectToDb;