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
               {/* Tombol Catatan Aktif */}
               <button 
                  className={`px-4 py-2 rounded shadow-lg transition duration-300 mr-2 mb-2 ${
                     !showArchived 
                        ? "bg-[#394867] text-[#F1F6F9]"  // Warna lebih gelap untuk tombol aktif
                        : "bg-[#F1F6F9] text-[#394867] hover:bg-[#394867] hover:text-[#F1F6F9]"
                  }`} 
                  onClick={() => setShowArchived(false)}
               >
                  Catatan Aktif
               </button>

               {/* Tombol Catatan Arsip */}
               <button 
                  className={`px-4 py-2 rounded shadow-lg transition duration-300 ${
                     showArchived 
                        ? "bg-[#394867] text-[#F1F6F9]"  // Warna lebih gelap untuk tombol aktif
                        : "bg-[#F1F6F9] text-[#394867] hover:bg-[#394867] hover:text-[#F1F6F9]"
                  }`} 
                  onClick={() => setShowArchived(true)}
               >
                  Catatan Arsip
               </button>
            </div>
               <button
                  className="bg-[#212A3E] text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
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
         <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
               <svg
               className="w-6 h-6"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
               >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
         </div>
         {children}
         </div>
      </div>
   );
};