import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Header() {
  const goToHome = () => {
    console.log("Home clicked");
  };

  return (
    <div>
      <Link to="/Shopping-Cart">
        <AppBar position="static" onClick={goToHome}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Shoppers-Stop
            </Typography>
          </Toolbar>
        </AppBar>
      </Link>
    </div>
  );
}

export default Header;
