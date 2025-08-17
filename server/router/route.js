const express = require('express');
const router = express.Router();
const User = require('../schema/user-schema');

// Register User
router.post('/register', async (req, res) => {
  const {name,mobile,email,addressLine,city,state,pincode,dob,gender,password} = req.body;
  try {
    const user = new User({ name,mobile,email,addressLine,city,state,pincode,dob,gender,password });
    await user.save();
    res.status(201).json("User Registered Successfully");
  } catch (error) {
    console.log("Register Error:", error);
    res.status(500).json("Something went wrong");
  }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: username }, { mobile: username }]
    });

    if (!user) return res.status(404).json("User not found");
    if (user.password !== password) return res.status(401).json("Wrong password");

    // Remove password before sending to frontend
    const { password: pwd, ...safeUser } = user._doc;

    res.status(200).json({ message: "Login successful", user: safeUser });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json("Something went wrong");
  }
});


// User Info for About Page
// router.post('/userinfo', async (req, res) => {
//   const { username } = req.body;
//   try {
//     const user = await User.findOne({
//       $or: [{ email: username }, { mobile: username }]
//     });

//     if (!user) return res.status(404).json("User not found");

//     res.status(200).json({
//       name: user.name,
//       email: user.email,
//       mobile: user.mobile
//     });
//   } catch (error) {
//     console.log("UserInfo Error:", error);
//     res.status(500).json("Something went wrong");
//   }
// });
// backend/routes/route.js

router.get('/userinfo', async (req, res) => {
  const { username } = req.query;

  try {
    const user = await User.findOne({
      $or: [{ email: username }, { mobile: username }]
    });

    if (!user) return res.status(404).json("User not found");

    res.status(200).json({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      gender: user.gender,
      dob: user.dob,
      address: user.address,
      city: user.city,
      state: user.state,
      pincode: user.pincode
    });
  } catch (error) {
    console.error("UserInfo error:", error);
    res.status(500).json("Something went wrong");
  }
});



module.exports = router;
