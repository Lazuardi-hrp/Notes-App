import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaStickyNote, FaTasks, FaClipboardList, FaInfoCircle } from "react-icons/fa";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
   const [showText, setShowText] = useState(isSidebarOpen);
   const location = useLocation(); // Untuk menentukan halaman aktif

   useEffect(() => {
      if (isSidebarOpen) {
         setTimeout(() => setShowText(true), 300);
      } else {
         setShowText(false);
      }
   }, [isSidebarOpen]);

   return (
      <div className="relative flex">
         {/* Sidebar */}
         <div className={`fixed left-0 top-0 h-full bg-gray-800 text-white transition-all duration-300 z-3 ${isSidebarOpen ? "w-44" : "w-16"}`}>
            <div className="p-4 flex flex-col h-full">
               {/* Sidebar Toggle Button */}
               <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                  className="text-white text-2xl p-2 hover:bg-gray-700 rounded-lg flex items-center">
                  <FaBars />
                  {showText && <span className="ml-2 text-sm transition-opacity duration-300">Menu</span>}
               </button>

               {/* Menu Items */}
               <div className="mt-12 space-y-4 w-full">
                  <NavItem icon={<FaStickyNote />} text="Notes" to="/" showText={showText} active={location.pathname === "/"} />
                  <NavItem icon={<FaTasks />} text="Todo" to="/todo" showText={showText} active={location.pathname === "/todo"} />
                  <NavItem icon={<FaClipboardList />} text="Notes-Task" to="/notes-task" showText={showText} active={location.pathname === "/notes-task"} />
                  <NavItem icon={<FaInfoCircle />} text="About" to="/about" showText={showText} active={location.pathname === "/about"} />
               </div>
            </div>
         </div>

         {/* Navbar */}
         <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-44" : "ml-16"}`}>
            <nav className="p-4 shadow-sm bg-white relative z-3">
               <div className="mx-auto flex justify-between items-center">
                  <h1 className="text-black text-2xl py-1 italic">Aplikasi Catatan</h1>
               </div>
            </nav>
         </div>
      </div>
   );
};

// Komponen Item Navigasi Sidebar
const NavItem = ({ icon, text, to, showText, active }) => {
   return (
      <Link 
         to={to} className={`flex items-center p-3 rounded-lg transition-colors ${
            active ? "bg-gray-700 text-white" : "hover:bg-gray-700"
         } ${showText ? "justify-start gap-3" : "justify-center"}`}>
         <span className="text-xl">{icon}</span>
         {showText && <span className="transition-opacity duration-300">{text}</span>}
      </Link>
   );
};

export default Navbar;
