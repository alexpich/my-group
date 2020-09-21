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

const Block = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
`;

const Span = styled.span`
  color: white;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.2rem 0.4rem;
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
      <Block key={cat.id}>
        <Link
          catname={cat.category_name}
          path={`/categories/${cat.id}`}
          to={`/categories/${cat.id}`}
        >
          <Image src={cat.image_url} alt={cat.category_name} />
          <Span>{cat.category_name}</Span>
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
      <Container fluid className="mt-2">
        <h1>Choose A Category</h1>
        <Row>
          <Col>{categories.length > 0 ? listItems : ""}</Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryList;
