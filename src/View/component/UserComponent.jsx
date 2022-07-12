import React from "react";
import "./css/UserComponent.css";

function UserComponent(props) {
  const data = props.user;
  return (
    <div className="user-list">
      <div>Firstname : {data.firstname} </div>
      <div>Lastname : {data.lastname} </div>
      <div>E-mail : {data.email} </div>
    </div>
  );
}

export default UserComponent;
