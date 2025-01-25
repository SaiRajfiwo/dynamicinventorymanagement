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
    <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
      <input
        className="border border-black-300 rounded bg-purple-300 px-4 py-2"
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border border-black-300 bg-purple-300 rounded px-4 py-2"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        className="border border-black-300 bg-purple-300 rounded px-4 py-2"
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button className="bg-green-500 hover:bg-green-400 text-white hover:text-black px-4 py-2 rounded transition-colors duration-200" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default InventoryForm;
