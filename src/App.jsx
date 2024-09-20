import React, { useState } from 'react';
import List from './component/List';
import Form from './component/Form'

export default function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'General Checkup', description: 'Basic health checkup', price: 500 },
    { id: 2, name: 'Dental Care', description: 'Dental cleaning and exam', price: 800 }
  ]);
  const [editableService, setEditableService] = useState(null);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const editService = (service) => {
    setEditableService(service);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Healthcare Services</h1>
      <Form
        addService={addService}
        updateService={updateService}
        editableService={editableService}
        setEditableService={setEditableService}
      />
      <List
        services={services}
        deleteService={deleteService}
        editService={editService}
      />
    </div>
  );
}
