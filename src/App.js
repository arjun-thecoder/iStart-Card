import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';

function Footer() {
  return (
    <footer className="bg-blue-400 text-center text-white p-5">
      <div className="container mx-auto">
        <div className="mb-2">
          An Initiative by Department of Information Technology and Communication, Government of
          Rajasthan.
        </div>
        <p>&copy; 2024 istart.rajasthan.gov.in</p>
      </div>
    </footer>
  );
}


function App() {
  return (

    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <CardFront />
        <CardBack />
      </div>
      <Footer />
    </div>
  );
}

export default App;
