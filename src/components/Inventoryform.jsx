import React, { useState } from "react";

const InventoryForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, category, quantity: parseInt(quantity) });
    setName("");
    setCategory("");
    setQuantity(0);
  };

  return (
    <form
      className="flex flex-col sm:flex-row gap-4 mb-4 w-full max-w-screen-md mx-auto px-4"
      onSubmit={handleSubmit}
    >
      {/* Item Name Input */}
      <input
        className="border border-gray-300 rounded bg-purple-300 px-4 py-2 w-full sm:w-1/4 lg:w-1/5"
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* Category Input */}
      <input
        className="border border-gray-300 rounded bg-purple-300 px-4 py-2 w-full sm:w-1/4 lg:w-1/5"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      {/* Quantity Input */}
      <input
        className="border border-gray-300 rounded bg-purple-300 px-4 py-2 w-full sm:w-1/4 lg:w-1/5"
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      {/* Submit Button */}
      <button
        className="bg-green-500 hover:bg-green-400 text-white hover:text-black px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
};

export default InventoryForm;
