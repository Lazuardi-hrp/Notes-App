import React, { useState } from "react";
import Modal from "../Modal";
import Button from "../shared/Button";

const AddTaskModal = ({ isOpen, onClose, columns, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Commerce",
    date: "",
    assigneeFallback: "",
    columnId: columns[0]?.id || "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-md">
        <div className="mb-3">
          <h2 className="text-2xl font-bold">Add New Task</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#212A3E] focus:border-[#212A3E]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#212A3E] custom-category-select">
                <option value="Commerce">Commerce</option>
                <option value="Design">Design</option>
                <option value="Medical">Medical</option>
                <option value="Automotive">Automotive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#212A3E]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Assignee Initials</label>
              <input
                type="text"
                name="assigneeFallback"
                value={formData.assigneeFallback}
                onChange={handleChange}
                maxLength="2"
                required
                className="w-full p-2 border rounded-lg uppercase focus:ring-2 focus:ring-[#212A3E]"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                name="columnId"
                value={formData.columnId}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#212A3E]">
                {columns.map((column) => (
                  <option key={column.id} value={column.id}>
                    {column.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTaskModal;