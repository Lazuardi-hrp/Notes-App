import React from "react";

const Button = ({ type = "button", onClick, children, variant = "primary", icon = null }) => {
   const baseClass = "px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

   const variants = {
      primary: "text-white bg-[#212A3E] hover:bg-[#394867] focus:ring-blue-500",
      secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
      danger: "text-white bg-red-500 hover:bg-red-600 focus:ring-red-500",
      warning: "text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500",
      active: "bg-[#394867] text-[#F1F6F9] shadow-lg",
      inactive: "bg-[#F1F6F9] text-[#394867] hover:bg-[#394867] hover:text-[#F1F6F9] shadow-lg",
      floating: "fixed bottom-6 right-6 bg-[#394867] text-[#F1F6F9] p-4 rounded-full shadow-lg hover:bg-[#F1F6F9] hover:text-[#394867] transition-all",
   };

   return (
      <button
         type={type}
         onClick={onClick}
         className={`${variant === "floating" ? variants.floating : baseClass + " " + variants[variant]}`}
      >
         {icon && <span className="inline-block mr-2">{icon}</span>}
         {children}
      </button>
   );
};

export default Button;
