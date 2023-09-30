import React from "react";

const dropdownStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "end",
  position: "absolute",
  right: "5px",
  top: "20px",
  backgroundColor: "#2B1A17",
  padding: "8px",
  borderRadius: "4px",
};

export function EditDropdown(props) {
  const { selected } = props;
  console.log("props: ", selected);
  return (
    <>
      <div class="dropdown-options" style={dropdownStyle}>
        <a href="#">Add</a>
        <a href="#">Delete</a>
        <a href="#">Rename</a>
      </div>
    </>
  );
}
