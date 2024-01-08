'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Introduction from './Introduction';
import Skills from "./Skills"
import {
  AboutUsImage,
  ExperienceIcon,
  TeamsIcon,
  ProjectsIcon,
  CircularIcon,
} from '../Icons';

export default function About() {
  return (
    <div className="container mx-auto flex-grow  w-full h-full mt-20  md:mt-30 ">
      <motion.p
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className=" text-white text-center text-2xl sm:text-5xl font-extrabold"
      >
        <span className="primary-text">Integrity, innovation, impact:</span> Our
        commitment to you.
      </motion.p>
      <Introduction />

      <div>
        <Skills />
      </div>
    </div>
  );
}
