import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    setDescription("");
    setQuantity(1);

    onAddItem(newItem);
  }
  return (
    <form className="add-form" id={"Packing List"} onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="packing quantity"
        id="#"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        name="packing item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
