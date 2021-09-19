import React, { useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "./Categories.css";
import {
  getCategories,
  getProductsByCategory,
} from "../Redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

function CategoriesDropdown() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    dispatch(getCategories());
    setLoading(false);
  }, []);

  const getProductsByCategories = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, [category]);

  return (
    <div className="categories">
      <InputLabel className="categories__label">Categories</InputLabel>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={getProductsByCategories}
          className="categories__dropDown"
        >
          <MenuItem></MenuItem>
          {categories.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      )}
    </div>
  );
}

export default CategoriesDropdown;
