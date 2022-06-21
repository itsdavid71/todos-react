import { useState } from "react";
import PropTypes from "prop-types";

function AddItemForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(title, date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={title}
        required
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

AddItemForm.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddItemForm;
