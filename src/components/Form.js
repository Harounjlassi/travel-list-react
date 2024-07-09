import { useState } from "react";

export default function Form({ onAddItems }) {
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
