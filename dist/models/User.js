"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name_prefix: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String },
    username: { type: String, unique: true, required: true },
    date_of_birth: { type: String, required: true, trim: true },
}, { timestamps: true });
module.exports = mongoose_1.default.model("User", UserSchema);
