import React from "react";
import NewGroupForm from "../components/NewGroupForm";
import { Container, Row, Col } from "react-bootstrap";

const Category = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NewGroupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
