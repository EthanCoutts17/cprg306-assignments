import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [itemCreated, setItemCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setItemCreated(true);

    setName("");
    setQuantity(1);
    setCategory("produce");

    setTimeout(() => {
      setItemCreated(false);
    }, 2000);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <main className="bg-slate-900">
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        {itemCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Item Created
          </div>
        )}

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">Create new Item</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <input
                placeholder="Item name"
                required
                type="text"
                onChange={handleNameChange}
                value={name}
                className="mt-1 p-1 block border-2 border-grey-300 w-full rounded-md text-black bg-grey-100 focus:bg-white"
              />
            </label>
            <label className="block mb-4">
              <input
                required
                min="1"
                max="99"
                type="number"
                onChange={handleQuantityChange}
                value={quantity}
                className="mt-1 p-1 block border-2 border-grey-300 w-full rounded-md text-black bg-grey-100 focus-bg-white"
              />
            </label>
            <label className="block mb-4">
              <select
                onChange={handleCategoryChange}
                value={category}
                className="mt-1 p-1 block border-2 border-grey-300 w-full rounded-md text-black bg-grey-100 focus:bg-white"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </label>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}