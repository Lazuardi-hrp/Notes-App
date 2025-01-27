import React, { useState, useEffect } from "react"
import NoteList from "./NoteList"
import NoteForm from "./NoteForm"
import SearchBar from "./SearchBar"
import { getInitialData, showFormattedDate } from "../utils/utils"

export default function App() {
   const [notes, setNotes] = useState([])
   const [searchTerm, setSearchTerm] = useState("")
   const [showArchived, setShowArchived] = useState(false)

   useEffect(() => {
      setNotes(getInitialData())
   }, [])

   const addNote = (title, body) => {
      const newNote = {
         id: +new Date(),
         title,
         body,
         archived: false,
         createdAt: new Date().toISOString(),
      }
      setNotes([...notes, newNote])
   }

   const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id))
   }

   const toggleArchive = (id) => {
      setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)))
   }

   const filteredNotes = notes.filter(
      (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()) && note.archived === showArchived,
   )

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Aplikasi Catatan</h1>
         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <div className="mb-4">
         <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => setShowArchived(false)}>
            Catatan Aktif
         </button>
         <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setShowArchived(true)}>
            Catatan Arsip
         </button>
         </div>
         <NoteForm addNote={addNote} />
         <NoteList
         notes={filteredNotes}
         deleteNote={deleteNote}
         toggleArchive={toggleArchive}
         showArchived={showArchived}
         showFormattedDate={showFormattedDate}
         />
      </div>
   )
}



