'use client';
import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { NavBarImage, CloseIcon } from './Icons';

type NavbarProps = {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
};

const variants = {
  open: {
    x: 1,
    transition: {
      duration: '1',
    },
  },
  close: {
    x: 2200,
    transition: {
      duration: '1',
    },
  },
};

const textVariant = {
  open: {
    x: [50, 150, 50],
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.3,
      ease: [0.5, 0.71, 1, 1.5],
    },
  },
  close: {
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const router = useRouter();
  const handleClick = (href: string) => {
    setIsOpen((isOpen: Boolean) => !isOpen);
    router.push(href);
  };
  return (
    <motion.div
      className="fixed top-0 bottom-0 left-0 w-screen z-200 "
      variants={variants}
      animate={isOpen ? 'open' : 'close'}
      initial={false}
    >
      <div className="flex justify-between items-center w-full h-full background-black px-8 relative">
        <div
          className="absolute cursor-pointer top-8 right-20"
          onClick={() => setIsOpen((isOpen: Boolean) => !isOpen)}
        >
          <CloseIcon />
        </div>
        <div></div>
        <div className=" flex-1 hidden lg:block">
          <NavBarImage />
        </div>

        <motion.div
          className="text-white flex-1 mx-10 px-10 | removeTextAnimation  "
          variants={textVariant}
          animate={isOpen ? 'open' : 'close'}
          initial={{ opacity: 0, scale: 0.5 }}
        >
          <div className=" text-left ">
            <p className=" py-2 transition-all ease-in-out duration-1000 delay-1000 text-2xl md:text-3xl  lg:text-4xl ">
              Have a look at some of my work
            </p>
            <Link
              href="/projects"
              className="text-xl cursor-pointer primary-text"
              onClick={() => handleClick('projects')}
            >
              Projects
            </Link>
          </div>

          <div className=" text-left mt-10">
            <p className="py-2 transition-all ease-in-out duration-1000 delay-1000 text-2xl md:text-3xl  lg:text-4xl">
              Want to know me more?
            </p>
            <Link
              href="/about"
              className="  text-xl cursor-pointer primary-text"
              onClick={() => handleClick('about')}
            >
              About
            </Link>
          </div>

          <div className=" text-left mt-10">
            <p className="py-2 transition-all ease-in-out duration-1000 delay-1000 text-2xl md:text-3xl  lg:text-4xl">
              Lets get in touch
            </p>
            <Link
              href="/contact-us"
              className="  text-xl cursor-pointer primary-text"
              onClick={() => handleClick('contact-us')}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
