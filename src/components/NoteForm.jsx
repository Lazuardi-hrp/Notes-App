import React, { useState } from "react"

const NoteForm = ({ addNote }) => {
   const [title, setTitle] = useState("")
   const [body, setBody] = useState("")
   const [remainingChars, setRemainingChars] = useState(50)

   const handleTitleChange = (e) => {
      const newTitle = e.target.value.slice(0, 50)
      setTitle(newTitle)
      setRemainingChars(50 - newTitle.length)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (title.trim() && body.trim()) {
         addNote(title, body)
         setTitle("")
         setBody("")
         setRemainingChars(50)
      }
   }

   return (
      <form onSubmit={handleSubmit} className="mb-4">
         <div className="mb-2">
         <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Note Title"
            className="w-full p-2 border rounded"
            required
         />
         <span className="text-sm text-gray-500">{remainingChars} characters remaining</span>
         </div>
         <div className="mb-2">
         <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Note Body"
            className="w-full p-2 border rounded"
            required
         />
         </div>
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
         Add Note
         </button>
      </form>
   )
}

export default NoteForm

