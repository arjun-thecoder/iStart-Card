import React from 'react';
import logo from '../images/logo.png'; // Import the image file
import istartLogo from '../images/istartLogo.png';

const navbar = () => {
    return (
        <div className='w-full bg-blue-300 m-auto flex justify-between'>
            <div className="logo">
                <img src={logo} className="logo w-24 " alt="Logo" />
            </div>
            <div className="istart">
                <img src={istartLogo} className="logo w-24 " alt="Istart Logo" />
            </div>
        </div>
    )
}

export default navbar

// rafce
