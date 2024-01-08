import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:text-bold
        
        "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <div className='className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark'>
        {/* <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="JavaScript" x="20vw" y="6vw" />
          <Skill name="ReactJS" x="0vw" y="12vw" />
          <Skill name="NextJS" x="-20vw" y="-15vw" />
          <Skill name="Web Design" x="15vw" y="-12vw" />
          <Skill name="Graphic Design" x="0vw" y="-20vw" />
          <Skill name="Bootstrap" x="-25vw" y="18vw" />
          <Skill name="Tailwind CSS" x="18vw" y="18vw" />
          <Skill name="Framer-motion" x="32vw" y="-5vw" /> */}
      </div>
    </>
  );
};

export default Skills;
