import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import CategoryService from "../services/category.service";
import GroupService from "../services/group.service";

const GroupsList = (props) => {
  const [categoryId, setCategoryId] = useState(props.match.params.id);
  const [categoryName, setCategoryName] = useState(null);
  const [groupList, setGroupList] = useState([]);

  const listItems = groupList.map((group) => (
    <li key={group.id}>
      <Link path={`/groups/${group.id}`} to={`/groups/${group.id}`}>
        {group.group_name}
      </Link>
    </li>
  ));

  useEffect(() => {
    if (categoryId != null) {
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
  }, [categoryId]);

  return (
    <>
      <p>{categoryName}</p>
      <Link to={"/create-group"}>
        <Button variant="primary">Create New Group</Button>
      </Link>
      <p>{categoryId != null ? "The category ID is: " + categoryId : ""}</p>
      <p>{groupList.length > 0 ? listItems : ""}</p>
    </>
  );
};

export default withRouter(GroupsList);
