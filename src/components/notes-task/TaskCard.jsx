import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({ task, index }) => {
   return (
      <Draggable draggableId={task.id} index={index}>
         {(provided, snapshot) => (
         <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`bg-white p-4 rounded shadow mb-2 ${
               snapshot.isDragging ? "opacity-50" : ""
            }`}
         >
            <h3 className="font-bold text-lg mb-1">{task.title}</h3>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded">{task.category}</span>
            <p className="text-gray-500 text-sm mt-2">{task.date}</p>
            <div className="flex items-center mt-2">
               <span className="text-sm text-gray-700">{task.assignee.fallback}</span>
            </div>
         </div>
         )}
      </Draggable>
   );
};