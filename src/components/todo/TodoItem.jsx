import { useState } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useTodos } from "../../contexts/TodoContext";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const { deleteTodo, toggleTodo } = useTodos();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteTodo(todo._id);
    } catch (error) {
      console.error("Error deleting todo:", error);
      setIsDeleting(false);
    }
  };

  const handleToggle = async () => {
    try {
      setIsToggling(true);
      await toggleTodo(todo._id);
    } catch (error) {
      console.error("Error toggling todo:", error);
    } finally {
      setIsToggling(false);
    }
  };

  return (
    <motion.li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <div className="todo-content">
        <button
          className={`todo-checkbox ${todo.completed ? "checked" : ""}`}
          onClick={handleToggle}
          disabled={isToggling || isDeleting}
          aria-label={
            todo.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          {todo.completed && <FaCheck className="check-icon" />}
        </button>
        <span className="todo-text">{todo.text}</span>
      </div>

      <motion.button
        className="delete-btn"
        onClick={handleDelete}
        disabled={isDeleting || isToggling}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaTrash />
      </motion.button>
    </motion.li>
  );
};

export default TodoItem;
