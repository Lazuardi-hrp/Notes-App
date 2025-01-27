import React from "react"

const Note = ({ note, deleteNote, toggleArchive, showArchived, showFormattedDate }) => {
   return (
      <div className="bg-white p-4 rounded shadow">
         <h2 className="text-xl font-bold mb-2">{note.title}</h2>
         <p className="mb-2">{note.body}</p>
         <p className="text-sm text-gray-500 mb-2">Dibuat pada: {showFormattedDate(note.createdAt)}</p>
         <div className="flex justify-between">
         <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-2 py-1 rounded">
            Hapus
         </button>
         <button onClick={() => toggleArchive(note.id)} className="bg-yellow-500 text-white px-2 py-1 rounded">
            {showArchived ? "Pindahkan" : "Arsipkan"}
         </button>
         </div>
      </div>
   )
}

export default Note

