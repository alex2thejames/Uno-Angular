const User = require('../models/user');

module.exports = {
    allUsers: (req,res) => {
        User.find().sort({ type: 1 })
            .then(data => {
                res.json({ message: "success", results: data});
            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    oneUser: (req,res) => {
        User.findOne({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data });

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    createUser: (req,res) => {
        User.create(req.body)
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    editUser: (req,res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true, new: true })
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    deleteUser: (req,res) => {
        User.findOneAndDelete({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    }
}