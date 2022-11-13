const { THOUGHT, USER} = require("../models");

const THOUGHTcontroller = {
    ALLthoughts(req, res) {
        THOUGHT.find({}).populate({
            path: "reactions",
            select: "-__v",
        }).select("-__v").sort({ _id: -1 }).then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    }
}