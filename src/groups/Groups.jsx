import React from "react";
import "./Groups.css";
import GroupItem from "./Group_items/GroupItem";

function Groups() {
  return (
    <div className="groups">
      <h1 className="group_title">
        Bizning <span>jamoa</span>
      </h1>
      <div className="group_container">
        <GroupItem />
      </div>
    </div>
  );
}

export default Groups;
