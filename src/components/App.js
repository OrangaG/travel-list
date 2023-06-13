import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItem) => [...prevItem, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (!items.length) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onToggle={handleToggleItem}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
