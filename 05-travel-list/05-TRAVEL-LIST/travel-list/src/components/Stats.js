import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to the list</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Let's go!"
          : `You have ${numItems} items to pack for your trip. You've already packed
        ${numPackedItems} (${percentage} %) of your list.`}
      </em>
    </footer>
  );
}
