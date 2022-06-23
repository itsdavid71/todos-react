import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Todo from "./routes/Todo";
import User from "./routes/User";

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/user">User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<Todo />} />
        <Route path="user/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
