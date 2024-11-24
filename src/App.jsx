import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export default function App() {
  const notify = () => toast("this is one!");
  const notify1 = () => toast("this is two!");
  const notify2 = () => toast("this is three!");
    return (
      <div className='flex gap-6 mt-32 justify-center items-center'  >
        <button className='bg-red-600' onClick={notify}>Notify!</button>
        <ToastContainer />
        <button className='bg-yellow-300' onClick={notify1}>Notify1!</button>
        <ToastContainer />
        <button className='bg-green-300' onClick={notify2}>Notify2!</button>
        <ToastContainer />
      </div>
  );
}
