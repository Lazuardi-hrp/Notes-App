import React from "react"
import SearchBar from "./SearchBar"

const Navbar = ({ searchTerm, setSearchTerm }) => {
   return (
      <nav className="p-4 mb-3 shadow-sm">
         <div className="mx-auto flex justify-between items-cente">
         <h1 className="text-black text-2xl pt-2 italic">Aplikasi Catatan</h1>
         <div className="w-1/3">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         </div>
         </div>
      </nav>
   )
}

export default Navbar

