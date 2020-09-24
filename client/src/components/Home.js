import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Jumbotron,
  Row,
} from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>Wut Group</h1>
              <p>Discover a community that enjoy the things you do</p>
              {/* Search Input here that pushes you to a Search page and fetches all groups with groups named similar as search query */}
              <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Find a group"
                  // onChange={handleGroupNameChange}
                />
                <InputGroup.Append>
                  <Button>Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
