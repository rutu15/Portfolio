'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen bg-orange-100 right-full z-30"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ ease: 'easeInOut', duration: '0.8' }}
      />
       <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen bg-white right-full z-20"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2,ease: 'easeInOut', duration: '0.8' }}
      />
       <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen bg-black right-full z-10"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4,ease: 'easeInOut', duration: '0.8' }}
      />
    </>
  );
};

export default TransitionEffect;
