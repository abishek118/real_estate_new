// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     match: /.+\@.+\..+/,
//     lowercase: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
// });

// userSchema.pre("save",  (next) => {
//   const user = this;

//   if (this.isModified("password") || this.isNew) {
//     bcrypt.genSalt(10,  (saltError, salt) => {
//       if (saltError) {
//         return next(saltError);
//       } else {
//         bcrypt.hash(user.password, salt, (error, hash) => {
//           if (error) {
//             return next(error);
//           }

//           user.password = hash;
//           next();
//         });
//       }
//     });
//   } else {
//     return next();
//   }
// });


// module.exports = mongoose.model("User", userSchema);