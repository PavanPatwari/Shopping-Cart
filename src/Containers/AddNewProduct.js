import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./AddNewProduct.css";
import AddProductForm from "./AddProductForm";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddNewProduct() {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleOpen = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
  };

  return (
    <div className="addNewProduct">
      <Button
        variant="outlined"
        color="primary"
        className="newProduct_button"
        onClick={handleOpen}
      >
        Add product
      </Button>
      {openModal ? (
        <AddProductForm setOpenModal={setOpenModal} setOpen={setOpen} />
      ) : (
        ""
      )}

      {open ? (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" onClose={handleClose}>
            This is a success message!
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddNewProduct;
