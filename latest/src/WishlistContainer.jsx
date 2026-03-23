import React, { useState } from "react";
import WishlistForm from "./WishlistForm";
import WishlistItem from "./WishlistItem";

function WishlistContainer() {
  const [items, setItems] = useState([]);

  const handleAddItem = (name, notes) => {
    const newItem = {
      id: Date.now(),
      name,
      notes
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
  };

  
  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className="note-board-container">
    
      <h1>Wish List </h1>

      <WishlistForm 
        onAdd={handleAddItem}
        onClear={handleClearAll}
      />

      <h2>My Wishes</h2>

      {items.map(item => (
        <WishlistItem
          key={item.id}
          item={item}
          onDelete={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default WishlistContainer;


















