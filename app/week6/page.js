
"use client"; 

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <div className="bg-slate-900">
        <h1 className="text-2xl font-bold m-6 text-left text-white">Shopping list</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}