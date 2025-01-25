import React from "react";

const Filter = ({ onFilter }) => {
  return (
    <div className="mb-4">
      <input
        className="border border-black-300 bg-purple-300 rounded px-4 py-2 w-full"
        type="text"
        placeholder="Filter by Category"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
