// src/utils-todo.jsx
import { useState } from "react";
import { toast } from "react-toastify";

// Fungsi untuk mendapatkan data awal
export const getInitialData = () => {
   return [
      { id: 1, text: "Learn Next.js", completed: false },
      { id: 2, text: "Build a todo app", completed: true },
      { id: 3, text: "Deploy to Vercel", completed: true },
   ];
};

// Hook untuk mengelola todo
export const useTodos = () => {
   const [todos, setTodos] = useState(getInitialData()); // Menggunakan fungsi untuk mendapatkan data awal
   const [newTodo, setNewTodo] = useState("");

   const addTodo = () => {
      if (newTodo.trim() !== "") {
         setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
         setNewTodo("");
         toast.success("Todo added successfully!");
      } else {
         toast.error("Todo cannot be empty!");
      }
   };

   const toggleComplete = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      );
      toast.info("Todo status updated!");
   };

   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.warn("Todo deleted!");
   };

   return {
      todos,
      newTodo,
      setNewTodo,
      addTodo,
      toggleComplete,
      deleteTodo,
   };
};