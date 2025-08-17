
import "./Navbar.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { products } from "./ProductList";
import Swal from "sweetalert2";
import logo from "../Assets/Slider/logo.png"

import {
  Popover,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Button
} from "@mui/material";

function Navbar() {
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const nameLower = searchName.trim().toLowerCase();
    const matchedProduct = products.find(
      (p) => p.name.toLowerCase() === nameLower
    );
    if (matchedProduct) {
      navigate(`/product/${matchedProduct.id}`);
    } else {
      
 Swal.fire({
  toast: true,
  position: 'top',
  icon: 'warning',
  title: 'Product not found!',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true
});
    }
  };

  // Popover logic
  const [anchorEl, setAnchorEl] = useState(null);
  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const handleOptionClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar1">
          <div className="logo"><img src={logo}></img><h1>SudoCart</h1> </div>
<div className="search1"></div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search product by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* ICONS SECTION */}
          <div className="icons" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Login Button */}
          
            <Button
  variant="contained"
  size="small"
  onClick={() => navigate("/login")}
  sx={{
    textTransform: "none",
    fontWeight: 800,
    color: "black",
    backgroundColor: "white",
    border: "2px solid #ffe680",
    '&:hover': {
      backgroundColor: "#ffe680", // Slightly lighter on hover
      borderColor: "#ffe680"
    }
  }}
>
  Login
</Button>

            {/* Cart Icon */}
            <Link to="/cart" style={{ color: "black" }}>
              <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i>
            </Link>

            {/* Popover Menu Icon */}
            <IconButton onClick={handleUserIconClick}>
              <i className="fa-solid fa-bars" style={{ fontSize: "20px" }}></i>
            </IconButton>
          </div>
        </div>

        {/* Bottom nav links */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/Shop">Shop</a></li>
          <li><a href="/Menpage">Men</a></li>
          <li><a href="/Womenpage">Women</a></li>
          <li><a href="/kidspage">Kids</a></li>
          <li><a href="/aboutus">About</a></li>
        </ul>
      </nav>

      {/* Popover Menu */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ width: 200 }}>
          <List>
            <ListItem button onClick={() => handleOptionClick("/admin")}>
              <ListItemText primary="Admin" />
            </ListItem>
            <ListItem button onClick={() => handleOptionClick("/userinfo")}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleOptionClick("/cart")}>
              <ListItemText primary="Your cart" />
            </ListItem>
            <ListItem button onClick={() => handleOptionClick("/watchlist")}>
              <ListItemText primary="WatchList" />
            </ListItem>
            <ListItem button onClick={() => handleOptionClick("/help")}>
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem button onClick={() => handleOptionClick("/settings")}>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                navigate("/login");
                handleClose();
              }}
            >
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Popover>
    </>
  );
}

export default Navbar;

