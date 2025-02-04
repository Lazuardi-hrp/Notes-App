import React, { useState, useEffect } from "react";
import NoteList from "./notes/NoteList";
import { ToastContainer, toast } from "react-toastify";
import AddNoteForm from "./notes/AddNoteForm"; 
import Navbar from "./NavBar";
import SearchBar from "./notes/SearchBar";
import { getInitialData, showFormattedDate } from "../utils/utils";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal"; 
export default function App() {
   const [notes, setNotes] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [showArchived, setShowArchived] = useState(false);
   const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      setIsAddNoteModalOpen(false);
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
      (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()) && note.archived === showArchived
   );

   return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
         <Navbar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
         />
         <div className={`p-4 flex-1 overflow-auto transition-all duration-300 ${isSidebarOpen ? "ml-44 w-[calc(100%-11rem)]" : "ml-16 w-[calc(100%-4rem)]"}`}>
            <div className="mb-4 flex flex-wrap justify-between items-center gap-2">
               <div className="flex gap-2">
                  <button 
                     className={`px-4 py-2 rounded shadow-lg transition duration-300 ${!showArchived ? "bg-[#394867] text-[#F1F6F9]" : "bg-[#F1F6F9] text-[#394867] hover:bg-[#394867] hover:text-[#F1F6F9]"}`} 
                     onClick={() => setShowArchived(false)}>
                     Catatan Aktif
                  </button>

                  <button 
                     className={`px-4 py-2 rounded shadow-lg transition duration-300 ${showArchived ? "bg-[#394867] text-[#F1F6F9]" : "bg-[#F1F6F9] text-[#394867] hover:bg-[#394867] hover:text-[#F1F6F9]"}`} 
                     onClick={() => setShowArchived(true)}>
                     Catatan Arsip
                  </button>
               </div>
               <div className="w-full sm:w-1/4">
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
               </div>
            </div>
            <NoteList
               notes={filteredNotes}
               deleteNote={deleteNote}
               toggleArchive={toggleArchive}
               showArchived={showArchived}
               showFormattedDate={showFormattedDate}
            />
         </div>

         <button
            className="fixed bottom-6 right-6 bg-[#394867] text-[#F1F6F9] p-4 rounded-full shadow-lg hover:bg-[#F1F6F9] hover:text-[#394867] transition-all"
            onClick={() => setIsAddNoteModalOpen(true)}>
            <FaPlus className="w-6 h-6" />
         </button>

         {/* Menggunakan Modal dari Modal.jsx */}
         <Modal isOpen={isAddNoteModalOpen} onClose={() => setIsAddNoteModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Tambah Catatan Baru</h2>
            <AddNoteForm addNote={addNote} onClose={() => setIsAddNoteModalOpen(false)} />
         </Modal>

         <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
   );
}