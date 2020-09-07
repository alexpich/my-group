import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import CategoryService from "../services/category.service";
import GroupService from "../services/group.service";

const GroupsList = (props) => {
  const [categoryId, setCategoryId] = useState(props.match.params.id);
  const [categoryName, setCategoryName] = useState(null);
  const [groupList, setGroupList] = useState([]);

  const listItems = groupList.map((group) => (
    <li key={group.id}>
      {/* <Link path={`/category/${cat.id}`} to={`/category/${cat.id}`}> */}
      {group.group_name}
      {/* </Link> */}
    </li>
  ));

  useEffect(() => {
    if (categoryId != null) {
      CategoryService.getOne(categoryId)
        .then((res) => {
          setCategoryName(res.data.category_name);
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  useEffect(() => {
    if (categoryId != null) {
      GroupService.getAllByCategory(categoryId)
        .then((res) => {
          setGroupList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <>
      <p>{categoryName}</p>
      {/* <button>
        <Link to={"/category/group/create"}>Create New Group</Link>
      </button> */}
      <p>{categoryId != null ? "The category ID is: " + categoryId : ""}</p>
      <p>{groupList.length > 0 ? listItems : ""}</p>
    </>
  );
};

export default withRouter(GroupsList);
