import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../service/api';
import {
  Container,
  Paper,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutPage = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loggedInUser = username ||
    JSON.parse(localStorage.getItem("loggedInUser"))?.user?.username ||
    JSON.parse(localStorage.getItem("loggedInUser"))?.user?.email ||
    JSON.parse(localStorage.getItem("loggedInUser"))?.user?.mobile;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserInfo(loggedInUser);
        setUser(res.data);
      } catch (err) {
        setError("Failed to load user info");
        console.error(err);
      }
    };
    if (loggedInUser) fetchUserInfo();
  }, [loggedInUser]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      {error && <Alert severity="error">{error}</Alert>}
      {!user && !error && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      )}
      {user && (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom><strong>Name:</strong> {user.name}</Typography>
<Typography variant="body1" gutterBottom><strong>Email:</strong> {user.email}</Typography>
<Typography variant="body1" gutterBottom><strong>Mobile:</strong> {user.mobile}</Typography>
<Typography variant="body1" gutterBottom><strong>Gender:</strong> {user.gender}</Typography>
<Typography variant="body1" gutterBottom><strong>Date of Birth:</strong> {user.dob}</Typography>
<Typography variant="body1" gutterBottom><strong>Address:</strong> {user.addressLine}</Typography>
<Typography variant="body1" gutterBottom><strong>City:</strong> {user.city}</Typography>
<Typography variant="body1" gutterBottom><strong>State:</strong> {user.state}</Typography>
<Typography variant="body1" gutterBottom><strong>Pincode:</strong> {user.pincode}</Typography>


          {/* ✅ Logout Button */}
          <Box mt={3} textAlign="center">
            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default AboutPage;
