import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { toast } from "react-toastify"; 
import Button from "../components/shared/Button";
import AddTaskModal from "../components/notes-task/AddTaskModal";
import { KanbanColumn } from "../components/notes-task/KanbanColumn";
import { useKanban } from "../hooks/useKanban";
import { getInitialData } from "../utils/utils-task";
import ToastNotifications from "../components/shared/Toast"; 

export default function KanbanPage({ isSidebarOpen }) {
   const [showModal, setShowModal] = useState(false);
   const { tasks, handleAddTask, handleDragEnd } = useKanban(getInitialData());

   // Fungsi untuk menambahkan task dengan notifikasi
   const handleAddTaskWithToast = (task) => {
      handleAddTask(task);
      toast.success("Task added successfully!");
   };

   // Fungsi untuk menangani drag and drop dengan notifikasi
   const handleDragEndWithToast = (result) => {
      handleDragEnd(result);
      toast.info("Task moved successfully!");
   };

   return (
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-44" : "ml-16"}`}>
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

            <DragDropContext onDragEnd={handleDragEndWithToast}>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {tasks.map((column) => (
                     <KanbanColumn key={column.id} column={column} />
                  ))}
               </div>
            </DragDropContext>

            <AddTaskModal
               isOpen={showModal}
               onClose={() => setShowModal(false)}
               columns={tasks}
               onSubmit={handleAddTaskWithToast}
            />

            <ToastNotifications />
         </div>
      </div>
   );
}