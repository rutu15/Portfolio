'use client';
import { motion } from 'framer-motion';
import hire from '../assets/hire.png';
import Image from 'next/image';
import { HomepageImage, DownloadIcon } from './Icons';

const Home = () => {
  return (
    <>
      <div className="container  mx-auto flex-grow w-full h-full lg:flex justify-between items-center mt-40 md:mt-10 lg:mt-7 xl:mt-4">
        <div className="flex-1 sm:order-2 md:order-1 text-center lg:text-left ">
          <h1 className="  text-white text-2xl md:text-6xl lg:text-5xl leading-tight">
            Hey, {`I'm `}
            <span className=" primary-text text-2xl md:text-6xl lg:text-5xl leading-normal">
              Rutu Dodiya
            </span>
          </h1>
          <h2 className="leading-tight text-2xl md:text-4xl lg:text-3xl text-white mt-5">
            Passionate{' '}
            <span className="primary-text text-2xl md:text-4xl lg:text-3xl leading-normal">
              Frontend Developer,
            </span>
            <p className="pt-6">
              {' '}
              Elevating User Experiences, One Line of Code at a Time: Crafting
              Seamless Frontend Solutions.
            </p>
          </h2>

          <motion.button
              whileHover={{
                scale: 1.2,
                transition: { yoyo: Infinity },
              }}
              animate={{ x: [0, -20, 20, -20, 20, 0] }}
              transition={{ delay: 1 }}
              className="mt-4 bg-transparent text-white border border-gray-200 :ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
             Download CV
            <DownloadIcon />
            </motion.button>

        </div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 4 }}
          className=" flex-1 lg:block sm:order-2 my-16 lg:mb-0"
        >
          <HomepageImage />
        </motion.div>
      </div>

      <div className="md:left-5 md:bottom-5 md:w-40 w-20 h-auto  overflow-x-hidden justify-center flex items-center fixed  ">
        <a className="flex absolute text-[10px] md:text-lg z-10 items-center justify-center rounded-full bg-white  text-black hover:text-white hover:border  hover:border-white hover:bg-transparent hover:cursor-pointer md:w-20 md:h-20 w-10 h-10 md:top-9 top-5">
          Hire me
        </a>
        <div>
          <Image src={hire} alt="gif" className="animate-spin-slow " />
        </div>
      </div>
    </>
  );
};

export default Home;
