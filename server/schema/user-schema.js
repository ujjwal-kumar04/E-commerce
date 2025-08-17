const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  password: { type: String },
  addressLine: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  dob: { type: String },       // or Date, if you prefer
  gender: { type: String }
});

module.exports = mongoose.model('User', userSchema);
