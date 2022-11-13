const {Schema, model, Types } = require("mongoose");

const thoughtSchema = new Schema({
    thoughtTEXT: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
},
{toJSON: {
    virtuals: true,
    getters: true,
},
id: false,
});