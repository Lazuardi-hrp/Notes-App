import React from "react"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
   return (
      <div className="mb-4">
         <input
         type="text"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         placeholder="Search notes..."
         className="w-full p-2 rounded inset-ring"
         />
      </div>
   )
}

export default SearchBar

