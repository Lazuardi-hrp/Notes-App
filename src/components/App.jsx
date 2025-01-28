import React, { useState, useEffect } from "react";
import NoteList from "./NoteList";
import { ToastContainer, toast } from "react-toastify";
import AddNoteForm from "./AddNoteForm"; 
import Navbar from "./NavBar";
import { getInitialData, showFormattedDate } from "../utils/utils";

export default function App() {
   const [notes, setNotes] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [showArchived, setShowArchived] = useState(false);
   const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);

   useEffect(() => {
      setNotes(getInitialData());
   }, []);

   const addNote = (title, body) => {
      const newNote = {
         id: +new Date(),
         title,
         body,
         archived: false,
         createdAt: new Date().toISOString(),
      };
      setNotes([...notes, newNote]);
      setIsAddNoteModalOpen(false); // Close the modal after adding a note
      toast.success("Catatan berhasil ditambahkan!");
   };

   const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
      toast.error("Catatan berhasil dihapus!");
   };

   const toggleArchive = (id) => {
      setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
   };

   const filteredNotes = notes.filter(
      (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()) && note.archived === showArchived,
   );

   return (
      <div className="min-h-screen bg-gray-100">
         <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <div className="container mx-auto p-4">
            <div className="mb-4 flex justify-between items-center">
               <div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => setShowArchived(false)}>
                     Catatan Aktif
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setShowArchived(true)}>
                     Catatan Arsip
                  </button>
               </div>
               <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => setIsAddNoteModalOpen(true)}
               >
                  Tambah Catatan
               </button>
            </div>
            <NoteList
               notes={filteredNotes}
               deleteNote={deleteNote}
               toggleArchive={toggleArchive}
               showArchived={showArchived}
               showFormattedDate={showFormattedDate}
            />
         </div>

         {/* Modal for adding a new note */}
         <Modal isOpen={isAddNoteModalOpen} onClose={() => setIsAddNoteModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Tambah Catatan Baru</h2>
            <AddNoteForm addNote={addNote} onClose={() => setIsAddNoteModalOpen(false)} />
         </Modal>

         <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
   );
}

// Define the Modal component
const Modal = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {children}
            <button
               className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
               onClick={onClose}
            >
               Tutup
            </button>
         </div>
      </div>
   );
};