import { useState } from "react";
import styles from "./Todo.module.css";
import AddItemForm from "../components/AddItemForm";
import TodoItem from "../components/TodoItem";

const defatulItems = [
  { id: 0, title: "Buy Bread", date: "2022-21-06", completed: false },
  { id: 1, title: "Buy Bread", date: "2022-21-06", completed: true },
];

function Todo() {
  const [items, setItems] = useState(defatulItems);
  console.log(styles);

  const handleSubmit = (title, date) => {
    const newItem = {
      id: items.length,
      title,
      date,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const handleItemComplete = (clickedItem) => {
    const newItems = items.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleItemDelete = (clickedItem) => {
    const newItems = items.filter((item) => item.id !== clickedItem.id);
    setItems(newItems);
  };

  return (
    <div className={styles.container}>
      <AddItemForm onSubmit={handleSubmit} />
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={() => handleItemComplete(item)}
          onDelete={() => handleItemDelete(item)}
        />
      ))}
    </div>
  );
}

export default Todo;
