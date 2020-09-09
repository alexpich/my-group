import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import CategoryService from "../services/category.service";
import GroupService from "../services/group.service";

const NewGroupForm = () => {
  const [categories, setCategories] = useState([]);

  const initialFormState = {
    categoryId: 17,
    groupName: "Placeholder",
    userId: 1,
  };

  const [categoryId, setCategoryId] = useState(initialFormState.categoryId); // Set default value to Art
  const [groupName, setGroupName] = useState(initialFormState.groupName);
  // const [location, setLocation] = useState("");
  const [userId, setUserId] = useState(initialFormState.userId);

  const getCategories = async () => {
    const categoryList = await CategoryService.getAll();
    setCategories(categoryList.data);
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategoryId(value);
  };

  const handleGroupNameChange = (e) => {
    const { value } = e.target;
    setGroupName(value);
  };

  // TODO: Get location
  // const handleLocationChange = (e) => {
  //   const { value } = e.target;
  //   setLocation({
  //     value,
  //   });
  // };

  const submitForm = (e) => {
    e.preventDefault();

    let data = {
      group_name: groupName,
      category_id: categoryId,
      user_id: userId,
    };

    GroupService.createOne(data.group_name, data.category_id, data.user_id);
    console.log("Group created successfully!");
  };

  const optionItems = categories
    .sort((a, b) => (a.category_name > b.category_name ? 1 : -1))
    .map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.category_name}
      </option>
    ));

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Form>
      <Form.Group controlId="formCategory">
        <Form.Label>Choose A Category Name</Form.Label>
        <Form.Control as="select" custom onChange={handleCategoryChange}>
          {categories.length > 0 ? optionItems : ""}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="handleGroupNameChange">
        <Form.Label>Group Name</Form.Label>
        <Form.Control
          type="input"
          placeholder="Hikers"
          onChange={handleGroupNameChange}
        />
      </Form.Group>
      {/* TODO: LOCATION Input */}
      {/* <Form.Group controlId="formGroupLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="input"
          placeholder="Los Angeles, CA"
          onChange={handleLocationChange}
        />
      </Form.Group> */}
      <Button variant="primary" onClick={submitForm}>
        Create Group
      </Button>
    </Form>
  );
};

export default NewGroupForm;
