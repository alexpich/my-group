import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryService from "../services/category.service";

const Image = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 10px;
`;

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  const listItems = categories
    .sort((a, b) => (a.category_name > b.category_name ? 1 : -1))
    .map((cat) => (
      <div key={cat.id}>
        <Link
          catname={cat.category_name}
          path={`/categories/${cat.id}`}
          to={`/categories/${cat.id}`}
        >
          {cat.category_name}
          <Image src={cat.image_url} />
        </Link>
      </div>
    ));

  useEffect(() => {
    CategoryService.getAll()
      .then((res) => {
        setCategories(res.data);
      })
      .then((data) => {})
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <p>Choose A Category</p>
      <ul>{categories.length > 0 ? listItems : ""}</ul>
    </>
  );
};

export default CategoryList;
