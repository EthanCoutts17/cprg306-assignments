"use client"; 

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(
    itemsData.length > 0 ? itemsData[0].name : ""
  ); 

  
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    
    const cleanedItemName = itemName.replace(/,.+$/, "").trim();

    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="flex">
      <div className="bg-slate-900 flex-1">
        <h1 className="text-2xl font-bold m-6 text-left text-white">Shopping list</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}