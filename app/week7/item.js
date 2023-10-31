import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name); 
    }
  };

  return (
    <div
      className="border font-bold border-sky-500 bg-sky-800 text-white w-full max-w-xs m-4 p-2 cursor-pointer"
      onClick={handleClick}
    >
      <li>
        <h3>name : {name} </h3>
        <p>quantity: {quantity} </p>
        <p>category: {category}</p>
      </li>
    </div>
  );
}