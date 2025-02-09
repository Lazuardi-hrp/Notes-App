import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskCard } from './TaskCard';

export const KanbanColumn = ({ column }) => {
   return (
      <Droppable droppableId={column.id}>
         {(provided, snapshot) => (
         <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${column.color} p-4 rounded-xl shadow ${
               snapshot.isDraggingOver ? "bg-opacity-70" : ""
            }`}
         >
            <h2 className="font-bold text-xl mb-4">{column.title}</h2>
            {column.tasks.map((task, index) => (
               <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
         </div>
         )}
      </Droppable>
   );
};