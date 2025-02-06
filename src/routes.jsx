import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotesPage from "./pages/NotesPage";
import TodoPage from "./pages/TodoPage";
import NotesTaskPage from "./pages/NotesTaskPage";
import AboutPage from "./pages/AboutPage";

export default function AppRoutes() {
   // State untuk mengontrol Sidebar
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   return (
      <Router>
         {/* Navbar di luar flex agar berada di atas */}
         <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
         <div className="flex">
            <div className="transition-all duration-300 w-full">
               <Routes>
                  <Route path="/" element={<NotesPage isSidebarOpen={isSidebarOpen} />} />
                  <Route path="/todo" element={<TodoPage isSidebarOpen={isSidebarOpen} />} />
                  <Route path="/notes-task" element={<NotesTaskPage isSidebarOpen={isSidebarOpen} />} />
                  <Route path="/about" element={<AboutPage isSidebarOpen={isSidebarOpen} />} />
               </Routes>
            </div>
         </div>
      </Router>
   );
}
