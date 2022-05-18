import React from "react";

const SingleComment = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header"> {props.children} </div>
        <div className="description"> A single Comment </div>
      </div>
      <div className="content">
        <div>Notes: SingleComment encapsolates the usercard JSX Compoent</div>
      </div>
    </div>
  );
};

export default SingleComment;

// const SingleComment = props => {
//   return (
//     <div className="ui card">
//       <div className="content">
//         <div className="header"> {props.children} </div>
//         <div className="description"> A single Comment </div>
//       </div>
//       <div className="ui buttom buttom">
//         <i className="add icon"> </i>
//         Add Notes
//       </div>
//     </div>
//   );
// };
