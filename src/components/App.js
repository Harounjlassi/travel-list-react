import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import Status from "./Status";
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
  function handleClear() {
    setItems((items) => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClear={handleClear}
      />
      <Status items={items} />
    </div>
  );
}
