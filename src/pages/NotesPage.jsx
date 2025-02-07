import React, { useState, useEffect } from "react";
import NoteList from "../components/notes/NoteList";
import { ToastContainer, toast } from "react-toastify";
import AddNoteForm from "../components/notes/AddNoteForm";
import SearchBar from "../components/notes/SearchBar";
import { getInitialData, showFormattedDate } from "../utils/utils";
import { FaPlus } from "react-icons/fa";
import Modal from "../components/Modal";
import Button from "../components/shared/Button";

export default function NotesPage({ isSidebarOpen }) {
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
         <div className={`p-4 flex-1 overflow-auto transition-all duration-300 ${isSidebarOpen ? "ml-44 w-[calc(100%-11rem)]" : "ml-16 w-[calc(100%-4rem)]"}`}>
         <div className="mb-4 flex flex-wrap justify-between items-center gap-2">
            <div className="flex gap-2">
               <Button
               variant={showArchived ? "inactive" : "active"}
               onClick={() => setShowArchived(false)}
               className="px-6 py-3 text-lg"
               >
               Catatan Aktif
               </Button>

               <Button
               variant={showArchived ? "active" : "inactive"}
               onClick={() => setShowArchived(true)}
               className="px-6 py-3 text-lg"
               >
               Catatan Arsip
               </Button>
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

         <Button
         variant="floating"
         onClick={() => setIsAddNoteModalOpen(true)}
         icon={<FaPlus className="w-7 h-7" />} 
         className="w-16 h-16 text-xl" 
         />

         <Modal isOpen={isAddNoteModalOpen} onClose={() => setIsAddNoteModalOpen(false)}>
         <h2 className="text-2xl font-bold mb-4">Tambah Catatan Baru</h2>
         <AddNoteForm addNote={addNote} onClose={() => setIsAddNoteModalOpen(false)} />
         </Modal>
         <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
   );
}
