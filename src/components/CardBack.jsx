import React from 'react';
import logo from '../images/istartLogo.png'; 

const CardBack = () => {
  return (
    // <div className='flex w-1/2 h-24 justify-center m-auto border border-slate-500 bg-black'>
    //   card Back
    // </div>

    <div className="flex flex-col text-center m-auto my-4 w-1/3 bg-slate-200 text-black rounded-lg justify-center">
      <div className="flex justify-center items-center h-16">
        <img src={logo} alt="Logo" className="h-20 w-24 mr-3" />
      </div>
      <div className="text-start text-sm bg-blue-400 text-black p-2 rounded-b-lg">
        <div className='flex justify-between'>
          <div className='w-1/2'>Issued to:</div>
          <div className='w-1/2'>Issued by:</div>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>Siyag rural Market Private Limited</div>
          <div className='w-1/2'>Department of IT</div>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>7, SIYAGO KA BAS TEH. MERTA ZILLA</div>
          <div className='w-1/2'>& Communication</div>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>NAGGORE</div>
          <div className='w-1/2'>Goverment of Rajasthan</div>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'> </div>
          <div className='w-1/2'>Tel: 5153222 (Extn: 21124)</div>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>RAJASTHAN, 342902</div>
          <div className='w-1/2'>istart.rajasthan.gov.in</div>
        </div>
      </div>
    </div>
  )
}

export default CardBack