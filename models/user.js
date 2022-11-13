const { isEmail } = require("validator");
const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        true: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Email is invalid!",],
    },
    thoughts: [
        {
            type:Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    
})