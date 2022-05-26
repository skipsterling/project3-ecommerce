import React from "react";

// spread all of the passed props onto this element so we dont have to define them all seperately
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;