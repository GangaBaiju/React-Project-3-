import React, { useState } from "react";

function WishlistForm({ onAdd, onClear }) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");


  
  const generateDetails = (value) => {
    const text = value.toLowerCase();
    if (text.includes("iphone")) return "Apple smartphone, high-end device";
    if (text.includes("laptop")) return "Portable computer for work or gaming";
    if (text.includes("shoes")) return "Comfortable footwear for daily use";
    if (text.includes("watch")) return "Smartwatch or analog watch for style";
    if (text.includes("bike")) return "Two-wheeler for travel and fun";
    if (text.includes("car")) return "Four-wheeler vehicle for transport";
    if (text.includes("headphones")) return "Noise-cancelling audio device";
    if (text.includes("camera")) return "DSLR or mirrorless for photography";
    if (text.includes("tablet")) return "Portable touchscreen device";
    if (text.includes("keyboard")) return "Mechanical or wireless keyboard";
    if (text.includes("mouse")) return "Wireless or gaming mouse";
    if (text.includes("bag")) return "Stylish backpack or travel bag";
    if (text.includes("tv")) return "Smart TV for entertainment";
    if (text.includes("book")) return "Interesting book to read";
    if (text.includes("phone")) return "Smartphone device";
    if (text.includes("dress")) return "Fashionable clothing item";
    if (text.includes("perfume")) return "Fragrance for personal use";
    if (text.includes("glasses")) return "Stylish sunglasses or eyeglasses";
    return "Custom item";
  };

 
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNotes(generateDetails(value));
  };

  
  const handleSubmit = () => {
    if (!name) return;
    onAdd(name, notes);
    setName("");
    setNotes("");
  };

 
  const handleClear = () => {
    onClear();   
    setName("");    
    setNotes("");    
     notes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your wish..."
        value={name}
        onChange={handleChange}
      />
      <br /><br />
      <textarea value={notes} readOnly />
      <br /><br />
      <button onClick={handleSubmit}>Add Item</button>
      <button onClick={handleClear} style={{ marginLeft: "10px" }}>
        Clear All
      </button>
    </div>
  );
}

export default WishlistForm;


























