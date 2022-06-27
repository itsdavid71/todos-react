import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import useAxios from "axios-hooks";
import Button from "../components/Button";
import styled from "styled-components";

const SubmitButton = styled(Button)`
  font-size: 24px;
`;

const Error = styled.div`
  background: red;
`;

function User() {
  const [input, setInput] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  const [{ data, loading, error }, refetch] = useAxios(
    `https://pokeapi.co/api/v2/pokemon/${userId}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${input}`);
  };

  return (
    <div className={styles.field}>
      <h1 className={styles.title}>Пользователь {userId}</h1>
      <form onSubmit={handleSubmit}>
        <p>Введи новый ID пользователя:</p>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <SubmitButton type="submit">Отправить</SubmitButton>
      </form>
      {loading && <span>Загрузка...</span>}
      {error && <Error>Ошибка</Error>}
      {!error && data && (
        <div>
          <h3>{data.name}</h3>
          <img src={data.sprites.front_default} alt="" />
        </div>
      )}
    </div>
  );
}

export default User;
