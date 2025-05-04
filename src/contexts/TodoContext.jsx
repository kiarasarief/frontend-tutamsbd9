import { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TodoContext = createContext();

export const useTodos = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API base URL - menggunakan variabel lingkungan
  const API_URL = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/todos`
    : "http://localhost:5000/api/todos";

  console.log("Using API URL:", API_URL);

  // Fetch all todos
  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
      console.log("Todos fetched successfully:", response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch todos");
      toast.error("Failed to load todos");
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  // Add a new todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTodos((prevTodos) => [response.data, ...prevTodos]);
      toast.success("Task added successfully");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add todo");
      throw error;
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete todo");
      throw error;
    }
  };

  // Toggle todo completion status
  const toggleTodo = async (id) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}/toggle`);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? response.data : todo))
      );
      toast.info(
        `Task marked as ${response.data.completed ? "completed" : "incomplete"}`
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update todo");
      throw error;
    }
  };

  const value = {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
