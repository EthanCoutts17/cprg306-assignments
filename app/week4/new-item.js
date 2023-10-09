"use client";

import{useState} from "react";


export default function NewItem(){
const[name,setName] = useState("");
const[quantity,setQuantity] = useState(1); 
const[category,setCategory] = useState("produce"); 
const [ItemCreated, setItemCreated] = useState(false); 


const handleSubmit = (item) => {
                        item.preventDefault ();
                        const newItem = {
                         name,
                         quantity,
                         category,
                        }
console.log(newItem)

alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`); 

setItemCreated(true);

setName("");
setQuantity(1);
setCategory('Produce'); 

setItemCreated(false);
};



const handleNameChange = (item) => {
                        setName(item.target.value);
}
const handleQuantityChange = (item) => {
                        setQuantity(parseInt(item.target.value));
}
const handlecategoryChange = (item) => {
                        setCategory(item.target.value);
}

return(
<main className="bg-slate-900">
<div className="min-h-screen bg-blue-gray-100 flex items-center justify-center "> 
{ItemCreated && (
<div className="absolute top-0 mt-8 text-2xl text-yellow-400" >item Created </div>
)}

                        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-2xl text-gray-800 font-bold mb-8"> Create new Item</h1>
                                                <form className onSubmit={handleSubmit}>
                                                                        <label className="block mb-4">
                                                                                                <input 
                                                                                                placeholder="Item name"
                                                                                                required
                                                                                                type = "text"
                                                                                                onChange={handleNameChange}
                                                                                                value = {name}
                                                                                                className="mt-1 p-1 block border-2 border-grey-300 w-full rounded-md text-black bg-grey-100 focus:bg-white"
                                                                                                />
                                                                        </label>
                                                                        <label className="block mb-4">
                                                                                                <input required
                                                                                                min="1"
                                                                                                max="99"
                                                                                                type = "number"
                                                                                                onChange={handleQuantityChange}
                                                                                                value = {quantity}
                                                                                                className="mt-1 p-1 block  border-2 border-grey-300 w-full rounded-md text-black bg-grey-100 focus:bg-white"
                                                                                                />
                                                                        </label>
                                                                        <label className="block mb-4">
                                                                                                <select 
                                                                                                onChange={handlecategoryChange}
                                                                                                className="mt-1 p-1 block border-2 border-grey-300 w-full rounded-md text-black bg-grey-100 focus:bg-white"
                                                                                                >
                                                                                                <option value disabled>category</option>
                                                                                                <option value = "produce"selected>Produce</option>
                                                                                                <option value = "dairy">Dairy</option>
                                                                                                <option value = "bakery">Bakery</option>
                                                                                                <option value = "meat">Meat</option>
                                                                                                <option value = "frozen foods">frozen Foods</option>
                                                                                                <option value = "canned goods">Canned Goods</option>
                                                                                                <option value = "dry goods">Dry Goods</option>
                                                                                                <option value = "beverages">Beverages</option>
                                                                                                <option value = "snacks">Snacks</option>
                                                                                                <option value = "household">Household</option>
                                                                                                <option value = "other">Other</option>
                                                                                                </select>


                                                                        </label>
                                                                        <button 
                                                                        onSubmit={handleSubmit}
                                                                        
                                                                        type = "submit"
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