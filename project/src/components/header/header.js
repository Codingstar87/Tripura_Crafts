import React, { useState } from "react";
import "./header.css"; 
import logo from "../Assets2/logo.jpg";
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // Close (Cross) icon

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="drawer-content"  // Added class for styling
    >
      {/* Close Button */}
      <IconButton className="close-button" onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>

      <List>
        <ListItem button component="a" href="#home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#products">
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component="a" href="#about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="#contact">
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
            {drawerList()}
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Header;
