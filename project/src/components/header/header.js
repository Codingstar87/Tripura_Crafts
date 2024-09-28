import React, { useState } from "react";
import "./header.css"; 
import logo from "../Assets2/logo.jpg";
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // Close (Cross) icon
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleOnClickOnLinkItem = (to) =>{
    navigate(to)
    toggleDrawer(false)

  }

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="drawer-content"  
    >
      {/* Close Button */}
      <IconButton className="close-button" onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>

      <List>
        <ListItem button component="a" to="/" >
          <ListItemText primary="Home" />
        </ListItem>
        {/* <ListItem button component="a" to="/products" onClick={() => handleOnClickOnLinkItem("/products")}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component="a" to="/about" onClick={() => handleOnClickOnLinkItem("/about")}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" to="/contact" onClick={() => handleOnClickOnLinkItem("/contact")}>
          <ListItemText primary="Contact" />
        </ListItem> */}
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



//import React, { useState } from "react";
// import "./header.css"; 
// import logo from "../Assets2/logo.jpg";
// import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close"; // Close (Cross) icon
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const drawerList = () => (
//     <div
//       role="presentation"
//       className="drawer-content"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       {/* Close Button */}
//       <IconButton className="close-button" onClick={toggleDrawer(false)}>
//         <CloseIcon />
//       </IconButton>

//       {/* Menu Links */}
//       <List>
//         <ListItem button component={Link} to="/">
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button component={Link} to="/products">
//           <ListItemText primary="Products" />
//         </ListItem>
//         <ListItem button component={Link} to="/about">
//           <ListItemText primary="About" />
//         </ListItem>
//         <ListItem button component={Link} to="/contact">
//           <ListItemText primary="Contact" />
//         </ListItem>
//       </List>
//       <Divider />
//     </div>
//   );

//   return (
//     <div className="fix-position-header">
//       <header className="header">
//         <h1>TRIPURA CRAFTS</h1>
//         <div className="logo">
//           <img src={logo} alt="Bamboo Clone Logo" className="logo-image" />
//         </div>
//         <div className="menu-icon">
//           {/* Hamburger Menu Icon */}
//           <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           {/* Drawer */}
//           <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//             {drawerList()}
//           </Drawer>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header; 