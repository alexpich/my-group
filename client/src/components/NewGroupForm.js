import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import CategoryService from "../services/category.service";
import GroupService from "../services/group.service";

const ImageInput = styled.div`
  background: #ededed;
  width: 160px;
  height: 100px;
`;

const Image = styled.img`
  width: 160px;
  height: 100px;
`;

const NewGroupForm = () => {
  const initialFormState = {
    categoryId: 17,
    groupName: "Placeholder",
    userId: 1,
  };

  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(initialFormState.categoryId); // Set default value to Art
  const [groupName, setGroupName] = useState(initialFormState.groupName);
  // const [location, setLocation] = useState("");
  const [userId, setUserId] = useState(initialFormState.userId);
  const [imageUrl, setImageUrl] = useState("");

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

  let initialImageInput = null;
  // Upload image
  const uploadImage = async (e) => {
    setLoading(true);

    let id = e.target.id;
    console.log("the uploaded id is: " + id);

    console.log("Uploading image...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wut-group");

    // Upload to Cloudinary
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/bpeach/image/upload",
      data,
      {
        onUploadProgress: (progressEvent) => {
          setLoadingProgress(
            "Upload progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      }
    );
    const imageData = res.data.secure_url;
    setImageUrl(imageData);

    setLoading(false);
  };

  const submitForm = (e) => {
    e.preventDefault();

    let data = {
      group_name: groupName,
      image_url: imageUrl,
      category_id: categoryId,
      user_id: userId,
    };

    GroupService.createOne(
      data.group_name,
      data.image_url,
      data.category_id,
      data.user_id
    );
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
      <Form.Group>
        <Form.Label>Upload Group Photo</Form.Label>
        {imageUrl ? (
          <ImageInput>
            <div>
              <Image src={imageUrl} alt="Group Image" />
            </div>
          </ImageInput>
        ) : (
          <ImageInput
            onClick={() => {
              initialImageInput.click();
            }}
          ></ImageInput>
        )}
        {loading ? <p>{loadingProgress}</p> : ""}
      </Form.Group>
      <input
        style={{ display: "none" }}
        type="file"
        name="file"
        placeholder="Upload an image"
        required
        onChange={uploadImage}
        ref={(fileInput) => (initialImageInput = fileInput)}
      />

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
