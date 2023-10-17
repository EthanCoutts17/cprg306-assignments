"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";



export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let itemsArray = itemsData.map((item) => ({ ...item }));

  const sortItems = () => {
    if (sortBy === "name") {
      return itemsArray
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return itemsArray
        .slice()
        .sort((a, b) => a.category.localeCompare(b.category));
    }
    return itemsArray;
  };

  const toggleSort = (value) => {
    setSortBy(value);
  };

  return (
    <main className="p-4">
      
      <div className="mb-4">
        <div className="flex justify-center">
          <button
            onClick={() => toggleSort("name")}
            className={`${
              sortBy === "name" ? "bg-blue-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded mr-2`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => toggleSort("category")}
            className={`${
              sortBy === "category" ? "bg-blue-500" : "bg-gray-300"
            } text-white px-4 py-2 rounded`}
          >
            Sort by Category
          </button>
        </div>
      </div>
      <ul>
        {sortItems().map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </main>
  );
}