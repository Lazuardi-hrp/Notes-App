import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Grip, Calendar } from "lucide-react";

export const TaskCard = ({ task, index }) => {
   // State untuk mengelola hover
   const [isHovered, setIsHovered] = useState(false);

   // Mapping warna kategori
   const categoryColors = {
      "Commerce": "text-yellow-800",
      "Design": " text-blue-800",
      "Medical": " text-green-800",
      "Automotive": "text-red-800",
   };

   // Ambil warna sesuai kategori, default ke abu-abu jika tidak ada di mapping
   const categoryColor = categoryColors[task.category] || "bg-gray-200 text-gray-800";

   return (
      <Draggable draggableId={task.id} index={index}>
         {(provided, snapshot) => (
         <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`bg-[#F1F6F9] p-4 rounded shadow mb-2 ${
               snapshot.isDragging ? "opacity-50" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <h3 className="font-bold text-lg mb-1">{task.title}</h3>
            {/* Terapkan warna sesuai kategori */}
            <span className={`text-sm px-2 py-1 rounded ${categoryColor}`}>
               {task.category}
            </span>
            <p className="text-gray-500 text-sm flex items-center mt-1">
                  <Calendar size={14} className="mr-1 text-gray-400" />
                  {task.date}
            </p>
            <div className="flex items-center mt-3 space-x-2">
               {/* Assignee Initials */}
               <div className={`w-8 h-8 flex items-center justify-center ${isHovered ? 'bg-gray-300 rounded' : ''} text-gray-700 font-semibold`}>
                  {task.assignee.fallback}
               </div>
               {/* Grip hanya muncul saat di-hover */}
               {isHovered && <Grip size={18} className="text-gray-500 cursor-grab" />}
            </div>
         </div>
         )}
      </Draggable>
   );
};