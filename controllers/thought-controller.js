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
        });
    },

    getTHOUGHTbyID({ params }, res) {
        console.log(params);
        THOUGHT.findOne({ _id: params.thoughtID }).select("-__v").sort({ _id: -1 }).then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    CREATEthought({ params, body }, res) {
        THOUGHT.create(body).then(({ _id }) => {
            return USER.findOneAndUpdate({ _id: params.userId }, { $push: { thoughts: _id } }, { new: true }
            );
        })
        .then((dbUserData) => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: "No user with this id." });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.json(err));
    },
};