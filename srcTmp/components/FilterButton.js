import React from "react";

const FilterButton = ({ isPressed, name, setFilter }) => {
  return (
    <button
      type="button"
      className={`btn toggle-btn ${isPressed ? "pressed" : ""}`}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  );
};

export default FilterButton;
