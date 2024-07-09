import { useState } from "react";
import Item from "./Item.js";

export function PackingList({
  items,
  onDeleteItem,
  handleToggleItem,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul style={{ overflow: "auto", scrollbarWidth: "none" }}>
        {sortedItems.map((i) => (
          <Item
            item={i}
            key={i.id}
            onDeleteItem={onDeleteItem}
            onhandleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description Order</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}
