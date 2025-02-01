import React from "react";
import SearchBar from "./SearchBar";
import {FaBars, FaStickyNote, FaTasks, FaClipboardList, FaInfoCircle} from "react-icons/fa";

const Navbar = ({ searchTerm, setSearchTerm, isSidebarOpen, setIsSidebarOpen }) => {
   return (
      <div className="relative flex">
         {/* Sidebar */}
         <div
            className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 z-50 
            ${isSidebarOpen ? "w-64" : "w-16"}`}
         >
            <div className="p-4 flex flex-col items-center h-full overflow-hidden">
               {/* Sidebar Toggle Button */}
               <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="text-white text-2xl p-2 hover:bg-gray-700 rounded-lg self-start"
               >
                  <FaBars />
               </button>
               {/* Menu Items */}
               <div className="mt-12 space-y-4 w-full">
                  <a
                     href="#"
                     className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                     <FaStickyNote className="mr-3 text-xl" />
                     {isSidebarOpen && <span>Notes</span>}
                  </a>
                  <a
                     href="#"
                     className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                     <FaTasks className="mr-3 text-xl" />
                     {isSidebarOpen && <span>Todo</span>}
                  </a>
                  <a
                     href="#"
                     className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                     <FaClipboardList className="mr-3 text-xl" />
                     {isSidebarOpen && <span>Notes-Task</span>}
                  </a>
                  <a
                     href="#"
                     className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                     <FaInfoCircle className="mr-3 text-xl" />
                     {isSidebarOpen && <span>About</span>}
                  </a>
               </div>
            </div>
         </div>

         {/* Navbar */}
         <div
            className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}
         >
            <nav className="p-4 mb-3 shadow-sm bg-white relative z-40">
               <div className="mx-auto flex justify-between items-center">
                  <h1 className="text-black text-2xl py-2 italic">Aplikasi Catatan</h1>
                  <div className="w-1/3">
                     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  </div>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
