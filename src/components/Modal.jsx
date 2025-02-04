import React from "react"

const Modal = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null

   return (
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-6">
         <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto">
         <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
               <svg
               className="w-6 h-6"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
         </div>
         {children}
         </div>
      </div>
   )
}

export default Modal

