'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white border-white border-t w-full p-10 sm:items-center sm:justify-between sm:flex ">
      <div >
        <span> 2023 © All Rights Reserved.</span>
      </div>

      <div className='mt-4 sm:mt-0' >
        <span
          className=" underline cursor-pointer"
          onClick={() => {
            window.open(
              'https://mail.google.com/mail/?view=cm&fs=1&to=dodiyarutu15@gmail.com'
            );
          }}
        >
          Say Hello
        </span>
      </div>
    </footer>
  );
};

export default Footer;
