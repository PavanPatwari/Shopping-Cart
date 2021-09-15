import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Link to="/Shopping-Cart">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              <p>Shoppers-Stop</p>
            </Typography>
          </Toolbar>
        </AppBar>
      </Link>
    </div>
  );
}

export default Header;
