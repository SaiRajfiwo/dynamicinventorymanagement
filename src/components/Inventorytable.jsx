import React, { useState } from "react";

const InventoryTable = ({ items, onEdit, onDelete, onSort }) => {
  const [editingItem, setEditingItem] = useState(null);

  const handleSave = (item) => {
    onEdit(item);
    setEditingItem(null);
  };

  return (
    <table className="table-auto w-full border-collapse border border-black mt-4">
      <thead>
        <tr className="bg-gray-300">
          <th className="border border-black px-4 py-2 text-center">Name</th>
          <th className="border border-black px-4 py-2 text-center">Category</th>
          <th
            className="border border-black px-4 py-2 cursor-pointer text-center"
            onClick={() => onSort("quantity")}
          >
            Quantity (Sort)
          </th>
          <th className="border border-black px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className={`${
              item.quantity < 10 ? "bg-red-200" : ""
            } border border-black`}
          >
            {editingItem?.id === item.id ? (
              <>
                <td className="border border-black px-4 py-2 text-center">
                  <input
                    className="border border-black rounded w-full px-2 py-1 text-center"
                    value={editingItem.name}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, name: e.target.value })
                    }
                  />
                </td>
                <td className="border border-black px-4 py-2">
                  <input
                    className="border border-black rounded w-full px-2 py-1 text-center"
                    value={editingItem.category}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        category: e.target.value,
                      })
                    }
                  />
                </td>
                <td className="border border-black px-4 py-2">
                  <input
                    className="border border-black rounded w-full px-2 py-1 text-center"
                    type="number"
                    value={editingItem.quantity}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        quantity: parseInt(e.target.value),
                      })
                    }
                  />
                </td>
                <td className="border border-black px-4 py-2">
                  <button
                    className="bg-green-400 hover:bg-green-500 text-black hover:text-white px-2 py-1 rounded mr-2 transition-colors duration-200"
                    onClick={() => handleSave(editingItem)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-400 hover:bg-red-500 text-black hover:text-white px-2 py-1 rounded transition-colors duration-200"
                    onClick={() => setEditingItem(null)}
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="border border-gray-400 px-4 py-2 text-center">{item.name}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">{item.category}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">{item.quantity}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  <button
                    className="bg-green-500 hover:bg-green-400 text-white hover:text-black px-2 py-1 rounded mr-2 transition-colors duration-200"
                    onClick={() => setEditingItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-400 text-white hover:text-black px-2 py-1 rounded transition-colors duration-200"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
