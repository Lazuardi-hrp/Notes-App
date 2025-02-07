import React, { useState } from "react";
import Button from "../shared/Button"; // Import komponen Button

const AddNoteForm = ({ addNote, onClose }) => {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim() && body.trim()) {
         addNote(title, body);
         setTitle("");
         setBody("");
         onClose();
      }
   };

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
         <Button type="button" onClick={onClose} variant="secondary">
            Batal
         </Button>
         <Button type="submit" variant="primary">
            Tambah Catatan
         </Button>
         </div>
      </form>
   );
};

export default AddNoteForm;
