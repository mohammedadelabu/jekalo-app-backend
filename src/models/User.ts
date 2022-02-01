import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name_prefix: { type: String },
    first_name: { type: String, required: true  },
    last_name: { type: String },
    username: { type: String, unique: true, required: true},
    date_of_birth: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
