const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname : {
        firstname: {
            type : String,
            required: true,
            minlength : [3, "First name must be atleast 3 character long"]
        },
        lastname: {
            type: String,
            minlength : [3, "Last name must be atleast 3 character long" ]
        }
    },
    email : {
        type : String,
        required: true,
        unique: true,
        minlength: [5, "Email must be atleast 5 char"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}