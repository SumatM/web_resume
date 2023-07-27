import React from 'react';
import Image from 'next/image';
import './Loading.css';
import loadingLogo from './../../public/loadingLogo.gif';

const Loader = () => {
  return (
    <div className='mainContainer'>
      <div>
        <Image src={loadingLogo} alt="logo" width={200} />
      </div>
      <div>
        <h1>
          {Array.from('Loading...').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Loader;