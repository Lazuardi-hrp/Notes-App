import React from "react"
import Note from "./Note"

const NoteList = ({ notes, deleteNote, toggleArchive, showArchived, showFormattedDate }) => {
   if (notes.length === 0) {
      return <p className="text-gray-500 text-center mt-4">Tidak ada catatan</p>
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
   )
}

export default NoteList

