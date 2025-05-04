import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTodos } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const { todos, loading, error, fetchTodos } = useTodos();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) {
    return (
      <div className="todo-list-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your tasks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="todo-list-container">
        <div className="error-container">
          <p>Error loading todos: {error}</p>
          <button className="btn btn-primary" onClick={fetchTodos}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <motion.div
        className="todo-list-container empty-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>No tasks yet! Add your first task above.</p>
      </motion.div>
    );
  }

  return (
    <div className="todo-list-container">
      <motion.ul
        className="todo-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default TodoList;
