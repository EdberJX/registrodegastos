import React from "react";

export default ({buttonOnClick}) => {
  const button = {
    top: "15%",
    right: "3%",
    position: "absolute"
  };
  return (
    <button
     
      className="btn-floating btn-large waves-effect waves-light purple"
      style={button}
      onClick={buttonOnClick}
    >
      <i className="material-icons">add</i>
    </button>
  );
};
