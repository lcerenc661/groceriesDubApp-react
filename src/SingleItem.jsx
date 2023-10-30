import { useState } from "react";

const SingleItem = ({ name, id, completed, removeItem, ediItem }) => {

  return (
    <div className="single-item">
      <input
        type="checkbox"
        id={`check${id}`}
        checked={completed}
        onChange={(e) => {
          ediItem(id);
        }}
      />
      <label
        htmlFor={`check${id}`}
        style={
          completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }>
        {name}
      </label>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          removeItem(id);
        }}>
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
