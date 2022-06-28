import { useState } from "react";
import { useSelector } from "react-redux";
import { Counter } from "../features/counter/Counter";
function About() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>О проекте</h1>
      <Counter />

      <h2>{count}</h2>
    </div>
  );
}

export default About;
