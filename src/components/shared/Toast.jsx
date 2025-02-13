import React from "react";
import { ToastContainer } from "react-toastify";

const ToastNotifications = () => {
   return (
      <ToastContainer position="bottom-right" autoClose={3000} />
   );
};

export default ToastNotifications;