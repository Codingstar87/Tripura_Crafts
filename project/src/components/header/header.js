import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../Assets2/logo.jpg";
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // Close (Cross) icon
import { Link, useLocation } from "react-router-dom";

const Header = ({ onProductsClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);  // Drawer open state
  const location = useLocation();  // Detect route changes

  // Effect to close the drawer when the route changes
  useEffect(() => {
    setDrawerOpen(false);  // Close drawer on route change
  }, [location]);  // Runs when the location (route) changes

  // Toggle drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);  // Open or close the drawer based on the value of `open`
  };

  // Drawer list
  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}   // Close drawer on outside click
      onKeyDown={toggleDrawer(false)} // Close drawer with keyboard navigation
      className="drawer-content"
    >
      {/* Close Button */}
      <IconButton className="close-button" onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>

      <List>
        <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/products" onClick={() => {
          onProductsClick();  // Trigger smooth scroll to products
          setDrawerOpen(false);  // Close the drawer
        }}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="fix-position-header">
      <header className="header">
        <h1>TRIPURA CRAFTS</h1>
        <div className="logo">
          <img src={logo} alt="Bamboo Clone Logo" className="logo-image" />
        </div>
        <div className="menu-icon">
          {/* Hamburger Menu Icon */}
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          {/* Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList()} {/* Render the drawer content */}
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Header;
