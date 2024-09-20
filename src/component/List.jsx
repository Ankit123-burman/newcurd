import React from 'react';

export default function List({ services, deleteService, editService }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Service List</h2>
      <ul className="list-none p-0">
        {services.map((service) => (
          <li
            key={service.id}
            className="p-4 mb-4 border border-gray-300 rounded-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold">{service.name}</h3>
              <p>{service.description}</p>
              <p className="text-green-600 font-bold">₹{service.price}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => editService(service)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteService(service.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
