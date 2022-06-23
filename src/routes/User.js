import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./User.module.css";

function User() {
  const [input, setInput] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${input}`);
  };

  return (
    <div className={styles.field}>
      <h1>Пользователь {userId}</h1>
      <form onSubmit={handleSubmit}>
        <p>Введи новый ID пользователя:</p>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default User;
