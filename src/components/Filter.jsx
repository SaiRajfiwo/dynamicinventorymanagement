import React from "react";

const Filter = ({ onFilter }) => {
  return (
    <div className="mb-4 w-full max-w-screen-md mx-auto px-4">
      <input
        className="border border-gray-300 bg-purple-300 rounded px-36 py-2 w-full sm:w-auto"
        type="text"
        placeholder="Filter by Category"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
