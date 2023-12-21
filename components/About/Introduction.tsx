'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutUsImage, ExperienceIcon, TeamsIcon, ProjectsIcon,CircularIcon } from '../Icons';

export default function Introduction() {
  return (
    <div className="lg:flex sm:mt-16 mt-2">
        
    <div className="flex flex-col text-white  w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="  py-4"
        whileHover={{
          scale: 1.5,
          transition: { yoyo: Infinity },
        }}
      >
        <AboutUsImage />
      </motion.div>
    </div>
    <div className="text-white  w-full p-5">
      <div className=" sm:flex sm:space-x-4  py-8 px-6">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { yoyo: Infinity },
          }}
          className=" w-full flex flex-col justify-center items-center border border-orange-300 py-8 px-6 rounded-md hover:bg-orange-400 space-y-3 "
        >
          <ExperienceIcon />
          <p className="mt-4 font-bold text-lg">Experience</p>
          <p className="text-xs text-gray-300">5+ Year Working</p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { yoyo: Infinity },
          }}
          className="sm:mt-0 mt-4 w-full flex flex-col justify-center items-center border border-orange-300 py-8 px-6 rounded-md hover:bg-orange-400  space-y-3 "
        >
          <TeamsIcon />

          <p className="mt-4 font-bold text-lg">Teams</p>
          <p className="text-xs text-gray-300 hover:text-sm">
            International
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { yoyo: Infinity },
          }}
          className="sm:mt-0 mt-4 w-full flex flex-col justify-center items-center border border-orange-300 py-8 px-6 rounded-md hover:bg-orange-400 space-y-3 "
        >
          <ProjectsIcon />
          <p className="mt-4 font-bold text-lg">Projects</p>
          <p className="text-xs text-gray-300">10+ Completed</p>
        </motion.div>
      </div>
      <div className="">
        <p className="text-lg text-gray-300 leading-8">
          Rutu Dodiya stands as a seasoned Front-End Developer with an
          impressive track record, boasting over 5 years of hands-on
          experience in the ever-evolving realm of web development. Armed
          with a {"Master's"} degree in computer science, Rutu combines
          academic rigor with practical proficiency. Adept in a diverse tech
          stack, including React, Next.js, JavaScript, TypeScript, and
          Tailwind, Rutu has consistently demonstrated a knack for solving
          complex technical challenges. Known for precision in coding and a
          strong analytical mindset, Rutu is committed to pushing the
          boundaries of web development to deliver robust and efficient
          solutions.
        </p>
      </div>
    </div>
  </div>
  );
}
