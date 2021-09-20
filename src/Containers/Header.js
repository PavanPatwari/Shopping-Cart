import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/Shopping-Cart" style={{ textDecoration: "none" }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className="headerText">
              <p>Online-Shop</p>
            </Typography>
          </Toolbar>
        </AppBar>
      </Link>
    </div>
  );
}

export default Header;
