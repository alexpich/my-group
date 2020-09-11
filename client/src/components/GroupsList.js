import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryService from "../services/category.service";
import GroupService from "../services/group.service";

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

const GroupsList = (props) => {
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(props.match.params.id);
  const [categoryName, setCategoryName] = useState(null);
  const [groupList, setGroupList] = useState([]);

  const listItems = groupList.map((group) => (
    // <li key={group.id}>
    // </li>
    <Block key={group.id}>
      <Link path={`/groups/${group.id}`} to={`/groups/${group.id}`}>
        <Span>{group.group_name}</Span>
      </Link>
    </Block>
  ));

  useEffect(() => {
    if (categoryId != null) {
      setLoading(true);
      CategoryService.getOne(categoryId)
        .then((res) => {
          setCategoryName(res.data.category_name);
        })
        .catch((error) => console.log(error));

      GroupService.getAllByCategory(categoryId)
        .then((res) => {
          setGroupList(res.data);
        })
        .catch((error) => console.log(error));
    }
    setLoading(false);
  }, [categoryId]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>{categoryName}</h1>
          <Link to={"/create-group"}>
            <Button variant="primary">Create New Group</Button>
          </Link>
          <p>
            {loading ? "Loading..." : ""}
            {!loading && groupList.length > 0
              ? listItems
              : "There are currently no groups in this category..."}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(GroupsList);
