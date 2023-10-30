import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (val) => {
    const newObj = {
      id: nanoid(),
      name: val,
      completed: false,
    };
    const newItems = [...items, newObj];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list')
  };

  const removeItem = (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setItems(newItemList);
    setLocalStorage(newItemList);
    toast.success('item deleted from the list')
  };

  const ediItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <main>
      <section className="section-center">
        <ToastContainer position="top-center" />
        <Form items={items} setItems={setItems} addItem={addItem} />
        <Items items={items} removeItem={removeItem}  ediItem={ediItem} />
      </section>
    </main>
  );
};

export default App;
