import React from "react";
import ReactDOM from "react-dom";

import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

import profile1 from "./image/pic-1.jpg";
import profile2 from "./image/pic-2.jpg";
import profile3 from "./image/pic-3.jpg";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard
        name="San Diego"
        date="9/3/2018"
        text="Vacation"
        description="Family Vacation"
        picture={profile1}
      />
      <UserCard
        name="Getty Museum"
        date="Sunday, ‎December ‎26, ‎2021,"
        text="Vacation"
        description="Dad and Son"
        picture={profile2}
      />
      <UserCard
        name="San Diego"
        date="9/3/2018"
        text="Vacation"
        description="Family Vacation"
        picture={profile3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
