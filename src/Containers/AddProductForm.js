import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./AddProductForm.css";
import Button from "@material-ui/core/Button";
import axios from "axios";

function AddProductForm({ setOpenModal, setOpen }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleClose = () => {
    setOpenModal(false);
  };

  const addProduct = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        title: "Fred",
        price: "Flintstone",
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then(function (response) {
        console.log(response);
        setOpenModal(false);
        setOpen(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="addProductForm">
      <div className="ModalContent">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          className="addProductForm__TextField"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          className="addProductForm__TextField"
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          className="addProductForm__TextField"
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          className="addProductForm__TextField"
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          className="addProductForm__TextField"
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="buttons">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className="addProductSubmitButton"
            onClick={addProduct}
          >
            ADD
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            CLOSE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
