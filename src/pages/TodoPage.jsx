import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import ToastNotifications from "../components/shared/Toast"; 

export default function TodoPage() {
   const [todos, setTodos] = useState([
      { id: 1, text: "Learn Next.js", completed: false },
      { id: 2, text: "Build a todo app", completed: true },
      { id: 3, text: "Deploy to Vercel", completed: true },
   ]);
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

   return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
         <h1 className="text-2xl font-bold mb-4">Todo List</h1>
         <div className="flex mb-4">
            <input
               type="text"
               className="flex-grow p-2 border rounded-lg"
               placeholder="Add a new todo"
               value={newTodo}
               onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
               className="ml-2 px-4 py-2 bg-black text-white rounded-lg"
               onClick={addTodo}
            >
               Add
            </button>
         </div>

         <ul>
            {todos.map((todo) => (
               <li
                  key={todo.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                     todo.completed ? "bg-gray-100" : "bg-white"
                  }`}
               >
                  <div className="flex items-center gap-2">
                     <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="w-5 h-5"
                     />
                     <span className={todo.completed ? "line-through text-gray-500" : ""}>
                        {todo.text}
                     </span>
                  </div>
                  <div className="flex gap-2">
                     <button className="text-gray-500 hover:text-black">
                        <FaEdit />
                     </button>
                     <button
                        className="text-gray-500 hover:text-red-600"
                        onClick={() => deleteTodo(todo.id)}
                     >
                        <FaTrash />
                     </button>
                  </div>
               </li>
            ))}
         </ul>
         {/* Gunakan komponen ToastNotifications di sini */}
         <ToastNotifications />
      </div>
   );
}