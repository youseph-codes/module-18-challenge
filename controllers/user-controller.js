const { USER } = require("../models");
const { db } = require("../models/thought");

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

    getUSERbyID({ params }, res) {
        USER.findOne({ _id: params.id }).populate({
            path: "thoughts",
            select: "-__v",
        }).select("-__v").then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user with this id." });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    CREATEuser({ body }, res) {
        USER.create(body).then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(400).json(err));
    },

    ADDfriend({ params, body}, res) {
        USER.findOneAndUpdate( { _id: params.userID }, { $push: { friends: params.friendID } }, { new: true, runValidators: true} )
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user with this id." });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.json(err));
    },
};

module.exports = USERcontroller;