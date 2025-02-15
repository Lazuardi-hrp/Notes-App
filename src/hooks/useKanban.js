import { useState } from 'react';

export const useKanban = (initialData) => {
   const [tasks, setTasks] = useState(initialData);

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

   const handleDragEnd = (result) => {
      const { source, destination } = result;

      if (!destination) return;

      const sourceColumn = tasks.find(col => col.id === source.droppableId);
      const destColumn = tasks.find(col => col.id === destination.droppableId);

      if (source.droppableId === destination.droppableId) {
         const newTasks = Array.from(sourceColumn.tasks);
         const [removed] = newTasks.splice(source.index, 1);
         newTasks.splice(destination.index, 0, removed);

         setTasks(tasks.map(column => 
         column.id === source.droppableId
            ? { ...column, tasks: newTasks }
            : column
         ));
      } else {
         const sourceTasks = Array.from(sourceColumn.tasks);
         const destTasks = Array.from(destColumn.tasks);
         const [removed] = sourceTasks.splice(source.index, 1);
         destTasks.splice(destination.index, 0, removed);

         setTasks(tasks.map(column => {
         if (column.id === source.droppableId) {
            return { ...column, tasks: sourceTasks };
         }
         if (column.id === destination.droppableId) {
            return { ...column, tasks: destTasks };
         }
         return column;
         }));
      }
   };

   return {
      tasks,
      handleAddTask,
      handleDragEnd
   };
};