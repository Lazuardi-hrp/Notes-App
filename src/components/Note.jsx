import React, { useState } from "react"
import { toast } from "react-toastify"
import Modal from "./Modal"

const Note = ({ note, deleteNote, toggleArchive, showArchived, showFormattedDate }) => {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleArchive = () => {
      toggleArchive(note.id)
      toast.info(showArchived ? "Catatan dipindahkan dari arsip!" : "Catatan diarsipkan!")
      setIsModalOpen(false)
   }

   const handleDelete = () => {
      deleteNote(note.id)
      setIsModalOpen(false)
   }

   return (
      <>
         <div
         className="bg-white rounded-lg shadow-md flex flex-col h-[300px] cursor-pointer"
         onClick={() => setIsModalOpen(true)}
         >
         <div className="p-6 flex-grow overflow-hidden">
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{note.body}</p>
         </div>
         <div className="p-4 bg-gray-100 text-sm text-gray-500">Dibuat pada: {showFormattedDate(note.createdAt)}</div>
         </div>

         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
         <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
         <p className="text-gray-600 mb-4">{note.body}</p>
         <p className="text-sm text-gray-500 mb-6">Dibuat pada: {showFormattedDate(note.createdAt)}</p>
         <div className="flex justify-between">
            <button
               onClick={handleDelete}
               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
               Hapus
            </button>
            <button
               onClick={handleArchive}
               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
            >
               {showArchived ? "Pindahkan" : "Arsipkan"}
            </button>
         </div>
         </Modal>
      </>
   )
}

export default Note

