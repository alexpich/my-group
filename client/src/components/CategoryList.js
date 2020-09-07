import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../services/category.service";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  const listItems = categories
    .sort((a, b) => (a.category_name > b.category_name ? 1 : -1))
    .map((cat) => (
      <li key={cat.id}>
        <Link
          catname={cat.category_name}
          path={`/categories/${cat.id}`}
          to={`/categories/${cat.id}`}
        >
          {cat.category_name}
        </Link>
      </li>
    ));

  useEffect(() => {
    CategoryService.getAll()
      .then((res) => {
        setCategories(res.data);
      })
      .then((data) => {})
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p>Choose A Category</p>
      <ul>{categories.length > 0 ? listItems : ""}</ul>
    </>
  );
};

export default CategoryList;
