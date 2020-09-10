import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import CategoryService from "../services/category.service";

const Image = styled.img`
  width: 160px;
  height: 100px;
  border-radius: 10px;
  margin: 1rem;
`;

const Block = styled.span`
  position: relative;
  text-align: center;
  color: white;
`;

const Span = styled.span`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  const listItems = categories
    .sort((a, b) => (a.category_name > b.category_name ? 1 : -1))
    .map((cat) => (
      <Block>
        <Link
          key={cat.id}
          catname={cat.category_name}
          path={`/categories/${cat.id}`}
          to={`/categories/${cat.id}`}
        >
          <Span>{cat.category_name}</Span>
          <Image src={cat.image_url} />
        </Link>
      </Block>
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
      <h1>Choose A Category</h1>
      <Container fluid>
        <Row>
          <Col>{categories.length > 0 ? listItems : ""}</Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryList;
