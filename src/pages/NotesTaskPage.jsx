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

   const handleAddTaskWithToast = (task) => {
      handleAddTask(task);
      toast.success("Task added successfully!");
   };

   const handleDragEndWithToast = (result) => {
      handleDragEnd(result);
      toast.info("Task moved successfully!");
   };

   return (
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-44" : "ml-16"}`}>
         <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
            <div className="flex flex-wrap justify-between items-center mb-4 sm:mb-6 gap-2">
               <div>
                  <h1 className="text-2xl sm:text-3xl font-bold">Design Boards</h1>
                  <p className="text-gray-500 text-xs sm:text-sm">Manage and track your design projects</p>
               </div>
               
               <Button 
                  variant="primary" 
                  className="px-6 py-3 text-lg"
                  onClick={() => setShowModal(true)}>
                  + Add Task
               </Button>
            </div>

            {/* Kanban Board dengan responsivitas */}
            <DragDropContext onDragEnd={handleDragEndWithToast}>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {tasks.map((column) => (
                     <KanbanColumn key={column.id} column={column} />
                  ))}
               </div>
            </DragDropContext>

            {/* Modal Tambah Task */}
            <AddTaskModal
               isOpen={showModal}
               onClose={() => setShowModal(false)}
               columns={tasks}
               onSubmit={handleAddTaskWithToast}/>

            <ToastNotifications />
         </div>
      </div>
   );
}
