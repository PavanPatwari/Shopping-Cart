import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./AddNewProduct.css";
import AddProductForm from "./AddProductForm";

function AddNewProduct() {
  const [openModal, setOpenModal] = useState(false);

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
      {openModal ? <AddProductForm setOpenModal={setOpenModal} /> : ""}
    </div>
  );
}

export default AddNewProduct;
