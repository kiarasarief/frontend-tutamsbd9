import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useTodos } from "../../contexts/TodoContext";
import { motion } from "framer-motion";
import "./TodoForm.css";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addTodo } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      setIsSubmitting(true);
      await addTodo(text);
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="todo-input"
          disabled={isSubmitting}
        />
        <motion.button
          type="submit"
          className="add-button"
          disabled={!text.trim() || isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FaPlus />
          <span>Add Task</span>
        </motion.button>
      </div>
    </form>
  );
};

export default TodoForm;
