import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Socks", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    //setItems((items) => items.push(item));
    //not allowed react is about immutubility and the solution is to create a brand new array with c
    //contains all the currect itams plus the new one
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((it) => it.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((it) => (it.id === id ? { ...it, packed: !it.packed } : it))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
      <Status items={items} />
    </div>
  );
}
function Logo() {
  return <h1> 🍀 Far Away🧳</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  console.log(description);
  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    if (!description) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>what do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => {
          console.log(e.target);
          //<input type="text" placeholder="Item ..." value="d">: console.log(e.target);
          setDescription(e.target.value);
        }}
      ></input>
      <button>ADD</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems: items;
  return (
    <div className="list">
      <ul style={{ overflow: "auto", scrollbarWidth: "none" }}>
        {items.map((i) => (
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
            onSetSortBy(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description Order</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onhandleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onhandleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Status({ items }) {
  if (items.length == 0)
    return (
      <footer className="stats">
        <em>Start adding some items to packing list 🚀</em>
      </footer>
    );

  //derived state
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItems / itemPacked) * 100);
  console.log(numItems);
  console.log(itemPacked);
  console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? "You have everything Ready to go ✈"
          : `🧳You have ${numItems} itmes in your list, and you already packed
        ${itemPacked} ( ${isFinite(percentage) ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
