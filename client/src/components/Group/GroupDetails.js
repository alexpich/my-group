import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GroupService from "../../services/group.service";

const GroupDetails = (props) => {
  const { id } = useParams();
  const [groupData, setGroupData] = useState([]);

  const getGroupData = async () => {
    const response = await GroupService.getOne(id);
    setGroupData(response.data);
  };

  useEffect(() => {
    getGroupData();
  }, []);

  useEffect(() => {
    console.log(groupData);
  }, [groupData]);

  return (
    <div>
      <h1>{groupData.group_name}</h1>
      <p>Created at {groupData.created_at}</p>
    </div>
  );
};

export default GroupDetails;
