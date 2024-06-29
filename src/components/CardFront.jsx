import React from 'react';
import logo from '../images/istartLogo.png';

const CardFront = () => {
  return (
    <div className="flex flex-col text-center m-auto my-4 w-1/3 bg-blue-400 text-black rounded-lg justify-center">
      <div className="flex justify-center items-center h-24 rounded-br-full bg-slate-200">
        <img src={logo} alt="Logo" className="h-20 w-28 mr-3" />
        <h2 className="text-xl font-bold">Government of Rajasthan</h2>
      </div>
      <div className="text-start text-sm bg-blue-400 text-white p-2 rounded-b-lg">
        <p className="text-xs">START UP</p>
        <p className="text-xs">REGISTRATION ND.</p>
        <p className="font-bold text-black">#5F70D00</p>
      </div>
    </div>
  );
};

export default CardFront;

