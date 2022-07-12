import React from "react";
import "../../Styles/UserComponent.css";

function UserComponent(props) {
  const data = props.user;
  return (

    <div className="user-list">
      <div>Firstname : {data.firstname} </div>
      <div>Lastname : {data.lastname} </div>
      <div>email : {data.email} </div>
    </div>
   
  );
}

export default UserComponent;
