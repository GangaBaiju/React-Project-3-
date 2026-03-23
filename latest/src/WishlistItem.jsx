import React from "react";

function WishlistItem({ item, onDelete }) {
  if (!item) return null;

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{item.name}</h3>
      <p>{item.notes}</p>

      <button onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default WishlistItem;
















