import React, { useState, useEffect } from 'react';

export default function Form({ addService, updateService, editableService, setEditableService }) {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (editableService) {
      setService(editableService);
    }
  }, [editableService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.name && service.description && service.price) {
      if (editableService) {
        updateService(service);
        setEditableService(null);
      } else {
        addService(service);
      }
      setService({ name: '', description: '', price: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{editableService ? 'Edit Service' : 'Add New Service'}</h2>
      <input
        type="text"
        placeholder="Service Name"
        className="w-full p-2 mb-4 border rounded-md"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Service Description"
        className="w-full p-2 mb-4 border rounded-md"
        value={service.description}
        onChange={(e) => setService({ ...service, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Service Price"
        className="w-full p-2 mb-4 border rounded-md"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        {editableService ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
}
