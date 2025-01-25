import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import InventoryForm from "./components/InventoryForm";
import Filter from "./components/Filter";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "Fruits", quantity: 15 },
    { id: 2, name: "Milk", category: "Dairy", quantity: 20 },
    { id: 3, name: "Bread", category: "Bakery", quantity: 2 },
    { id: 4, name: "Chips", category: "Wafers", quantity: 6 },
    { id: 5, name: "Juice", category: "Drinks", quantity: 14 },
  ]);

  const [filter, setFilter] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const handleEditItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSort = (key) => {
    setItems([...items].sort((a, b) => a[key] - b[key]));
  };

  const filteredItems = filter
    ? items.filter((item) => item.category.toLowerCase() === filter.toLowerCase())
    : items;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-purple-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
              <h1 className="text-xl sm:text-2xl font-bold hover:text-yellow-300">
                Dynamic Inventory Management
              </h1>
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="hover:bg-purple-500 hover:text-yellow-300 px-3 font-bold py-2 rounded-md text-sm sm:text-l"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:bg-purple-500 hover:text-yellow-300 px-3 font-bold py-2 rounded-md text-sm sm:text-l"
              >
                Login
              </a>
              <a
                href="#"
                className="hover:bg-purple-500 hover:text-yellow-300 px-3 font-bold py-2 rounded-md text-sm sm:text-l"
              >
                Sign Up
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-yellow-300 px-3 py-2 rounded-md">
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mt-8 mx-auto p-4">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8">
          <span className="text-rose-600">Dynamic</span>{" "}
          <span className="text-rose-600">Inventory</span>{" "}
          <span className="text-rose-600">Management</span>
        </h2>

        <InventoryForm onAddItem={handleAddItem} />
        <Filter onFilter={setFilter} />
        <InventoryTable
          items={filteredItems}
          onEdit={handleEditItem}
          onDelete={handleDeleteItem}
          onSort={handleSort}
        />
        <p className="text-center mt-14 text-gray-600 text-sm sm:text-base">
          © 2024 Dynamic Inventory Management. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
