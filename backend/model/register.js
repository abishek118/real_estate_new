const mongoose = require("mongoose");

const RegisterSchema = {
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
};

module.exports = RegisterSchema;