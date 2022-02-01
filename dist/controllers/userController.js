"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getAllUsers = exports.createUser = void 0;
const User = require("../models/User");
const validation_1 = require("../validations/validation");
// CREATE
const createUser = async (req, res, next) => {
    try {
        let { first_name, last_name, username, date_of_birth } = req.body;
        let fn_letter = first_name.split("")[0];
        let ln_letter = last_name.split("")[0];
        let name_prefix = `${fn_letter}${ln_letter}`;
        const newUser = new User({
            name_prefix,
            first_name,
            last_name,
            username,
            date_of_birth,
        });
        const isValid = (0, validation_1.validateUser)(req.body);
        if (isValid.error) {
            return res.status(400).json({
                status: "error",
                message: isValid.error.details[0].message,
            });
        }
        else {
            const savedUser = await newUser.save();
            res
                .json({ success: true, message: "A User has been created", savedUser })
                .status(201);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.createUser = createUser;
// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const Users = await User.find();
        res.status(200).send(Users);
    }
    catch (error) {
        res.status(500).send({ message: error || "Error Occured" });
    }
};
exports.getAllUsers = getAllUsers;
// DELETE
const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({ username: req.params.username });
        res.status(200).json("You deleted the user succesfully");
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.deleteUser = deleteUser;
