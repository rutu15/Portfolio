'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { MenuIcon } from './Icons';
import Logo from '../assets/logo.jpg'
import { Navbar } from '.';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <header className="flex w-full fixed background-black  justify-between items-center py-6 xl:px-32 lg:px-16 md:px-12 px-8 ">
      <div className="text-white">
        <Image
          src={Logo}
          alt="logo"
          className=" h-12 w-12 sm:h-16 sm:w-16"
          onClick={() => router.push('/')}
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <MenuIcon />
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
