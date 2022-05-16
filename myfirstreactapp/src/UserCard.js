import React from "react";

const UserCard = props => {
  return (
    <div class="ui card">
      <a href="/" className="images">
        <img src={props.picture} style={{ width: "100%" }} alt="profile" />
      </a>
      <div class="content">
        <a href="/" className="header">
          {props.name}
        </a>
        <div class="description">{props.description}</div>
        <div class="meta">
          <span class="date"> {props.date} </span>
        </div>
        <div class="extra content">
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
