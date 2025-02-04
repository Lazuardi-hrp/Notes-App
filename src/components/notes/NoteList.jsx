import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote, toggleArchive, showArchived, showFormattedDate }) => {
   if (notes.length === 0) {
      return (
         <div className="flex flex-col items-center justify-center mt-8">
         {/* SVG Icon for "No Notes" */}
         <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 2v2m-5-2v2M6 2v2m13.5 8.5V10c0-3.3 0-4.95-1.025-5.975S15.8 3 12.5 3h-3C6.2 3 4.55 3 3.525 4.025S2.5 6.7 2.5 10v5c0 3.3 0 4.95 1.025 5.975S6.2 22 9.5 22h2m10-7L18 18.5m0 0L14.5 22m3.5-3.5l3.5 3.5M18 18.5L14.5 15M7 15h4m-4-5h8" color="#000" />
         </svg>
         <p className="text-gray-500 text-center mt-6">Tidak ada catatan</p>
         </div>
      );
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {notes.map((note) => (
         <Note
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleArchive={toggleArchive}
            showArchived={showArchived}
            showFormattedDate={showFormattedDate}
         />
         ))}
      </div>
   );
};

export default NoteList;