import React from 'react';
import Image from 'next/image';
import './Loading.css';
import loadingLogo from './../../public/loadingLogo.gif';

const Loader = () => {
  return (
    <div className='mainContainer'>
      <div>
        <Image src={loadingLogo} alt="logo" width={150} priority />
      </div>
      <div>
          <h1 className='loadingWord'>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
