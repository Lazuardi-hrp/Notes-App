import React, { useState } from "react";
import Button from "../components/shared/Button";
import AddTaskModal from "../components/notes-task/AddTaskModal";
import { getInitialData } from "../utils/utils-task";

export default function KanbanPage() {
   const [tasks, setTasks] = useState(getInitialData());
   const [showModal, setShowModal] = useState(false);

   const handleAddTask = (formData) => {
      const newTask = {
         id: Date.now().toString(),
         title: formData.title,
         category: formData.category,
         date: new Date(formData.date).toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
         }),
         assignee: {
         avatar: "/placeholder.svg?height=24&width=24",
         fallback: formData.assigneeFallback.toUpperCase(),
         },
      };

      setTasks((prevTasks) =>
         prevTasks.map((column) =>
         column.id === formData.columnId
            ? { ...column, tasks: [...column.tasks, newTask] }
            : column
         )
      );
   };

   const renderTask = (task) => (
      <div key={task.id} className="bg-white p-4 rounded shadow mb-2">
         <h3 className="font-bold text-lg mb-1">{task.title}</h3>
         <span className="text-sm bg-gray-200 px-2 py-1 rounded">{task.category}</span>
         <p className="text-gray-500 text-sm mt-2">{task.date}</p>
         <div className="flex items-center mt-2">
            <img src={task.assignee.avatar} alt={task.assignee.fallback} className="w-6 h-6 rounded-full mr-2" />
            <span className="text-sm text-gray-700">{task.assignee.fallback}</span>
         </div>
      </div>
   );

   return (
      <div className="p-6 bg-gray-100 min-h-screen">
         <div className="flex justify-between items-center mb-6">
         <h1 className="text-2xl font-bold">Design Boards</h1>
         <Button 
            variant="primary" 
            className="px-6 py-3 text-lg"
            onClick={() => setShowModal(true)}>
            + Add Task
         </Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {tasks.map((column) => (
            <div 
               key={column.id} 
               className={`${column.color} p-4 rounded-xl shadow`}
            >
               <h2 className="font-bold text-xl mb-4">{column.title}</h2>
               {column.tasks.map(renderTask)}
            </div>
         ))}
         </div>

         <AddTaskModal
         isOpen={showModal}
         onClose={() => setShowModal(false)}
         columns={tasks}
         onSubmit={handleAddTask}/>
      </div>
   );
}