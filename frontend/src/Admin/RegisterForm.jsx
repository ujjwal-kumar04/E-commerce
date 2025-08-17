import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Typography
} from "@mui/material";
import { addUser } from "../service/api"; // update with your path

function RegisterForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
    dob: '',
    gender: ''
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      return Swal.fire("Error", "Passwords do not match", "error");
    }

    try {
      const res = await addUser(user);
      if (res.status === 201) {
        Swal.fire("Success", res.data, "success");
        navigate('/login');
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Paper elevation={1} sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Your Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            sx={{ mt: 1 }}
            onChange={onChange}
            required
          />
          <TextField
            label="Mobile"
            name="mobile"
            fullWidth
           sx={{ mt: 1 }}
            onChange={onChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
          sx={{ mt: 1 }}
            onChange={onChange}
            required
          />
           <FormControl component="fieldset" margin="1" fullWidth>
            <FormLabel component="legend" sx={{ mb: 1 }}>
              Gender
            </FormLabel>
            <RadioGroup
              row
              name="gender"
              value={user.gender}
              onChange={onChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          {/* Date of Birth */}
          <TextField
            type="date"
            name="dob"
            fullWidth
           sx={{ mt: 1 }}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
            label="Date of Birth"
            required
          />

          {/* Address Section */}
         <TextField
  label="Local Area / Address Line"
  name="addressLine"
  fullWidth
 sx={{ mt: 1,  mb:1}}
  onChange={onChange}
  required
/>

<Box sx={{ display: "flex", gap: 2 }}>
  <TextField
    label="City"
    name="city"
    fullWidth
    onChange={onChange}
    required
  />
  <TextField
    label="State"
    name="state"
    fullWidth
    onChange={onChange}
    required
  />
  <TextField
    label="Pincode"
    name="pincode"
    fullWidth
    onChange={onChange}
    required
  />
</Box>
          {/* Passwords */}
          <TextField
            type="password"
            label="Password"
            name="password"
            fullWidth
          sx={{ mt: 1 }}
            onChange={onChange}
            required
          />
          <TextField
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            fullWidth
          sx={{ mt: 1 }}
            onChange={onChange}
            required
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>

        <Typography sx={{ mt: 2 }} align="center">
          Already have an account?{" "}
          <a href="/login" style={{ color: "#1976d2", textDecoration: "none" }}>
            Login
          </a>
        </Typography>
      </Paper>
    </Box>
  );
}

export default RegisterForm;
