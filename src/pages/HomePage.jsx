import { motion } from "framer-motion";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container home-container">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-header">
          <h1 className="home-title">My Todo List</h1>
          <p className="home-subtitle">Organize your tasks with style</p>
        </div>

        <div className="todos-container">
          <TodoForm />
          <TodoList />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
