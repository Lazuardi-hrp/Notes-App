import React, { useState } from "react"

const AddNoteForm = ({ addNote, onClose }) => {
   const [title, setTitle] = useState("")
   const [body, setBody] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      if (title.trim() && body.trim()) {
         addNote(title, body)
         setTitle("")
         setBody("")
         onClose()
      }
   }

   return (
      <form onSubmit={handleSubmit} className="space-y-4">
         <div>
         <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Judul
         </label>
         <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
         />
         </div>
         <div>
         <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Isi Catatan
         </label>
         <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
         ></textarea>
         </div>
         <div className="flex justify-end space-x-2">
         <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
         >
            Batal
         </button>
         <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-[#212A3E] rounded-md hover:bg-[#394867] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
         >
            Tambah Catatan
         </button>
         </div>
      </form>
   )
}

export default AddNoteForm

