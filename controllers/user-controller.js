const { USER } = require("../models");

const USERcontroller = {
    ALLusers(req, res) {
        USER.find({}).populate({
            path: "thoughts",
            select: "-__v",
        }).select("-__v").sort({ _id: -1 }).then((dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
}