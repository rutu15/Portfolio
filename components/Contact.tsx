'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, LinkedinIcon, GmailIcon, GithubIcon } from './Icons';

function Contact() {
  return (
    <div className="container flex-grow mx-auto mt-40 md:mt-10 lg:mt-7 xl:mt-4 p-5 ">
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" text-white text-center text-2xl sm:text-5xl font-extrabold"
      >
        <span className="primary-text">Connect with Creativity:</span> Reach
        Out, Inspire, Collaborate – Your Ideas, Our Passion!
      </motion.p>

      <div className="mx-auto flex w-full mt-24  ">
        <div className="  text-white h-full w-2/6 ">
          <div className=" flex flex-col  justify-center items-center rounded-full mx-auto  border border-white bg-transparent   w-1/4 py-2">
            <div className="my-4 ">
              <a href="#">
                <FacebookIcon />
              </a>
            </div>
            <div className="mb-4  ">
              <a href="#">
                <LinkedinIcon />
              </a>
            </div>
            <div className="mb-4 ">
              <a href="#">
                <GmailIcon />
              </a>
            </div>
            <div className="mb-4 p-0.5 bg-black  border-white border rounded-md ">
              <a href="#">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="  w-2/4 h-full bg-red-200 p-5 mx-5">
          <div>Get in Touch</div>
          <div className="flex">
            <div>hello</div>
            <div>hey</div>  
          </div>
        </div>
        <div className=" text-white w-full h-full">
          <form className=" flex flex-col items-center space-y-8 ">
            <input
              type="text"
              className="w-full rounded-lg p-3 border border-white bg-transparent"
              placeholder="Enter Your Name"
              required
            />

            <input
              type="email"
              className="w-full rounded-lg p-3 border border-white bg-transparent"
              placeholder="Enter Your Email"
              required
            />

            <textarea
              className="w-full rounded-md p-3  border border-white bg-transparent"
              placeholder="Write you message here"
              required
            />
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { yoyo: Infinity },
              }}
              animate={{ x: [0, -20, 20, -20, 20, 0] }}
              transition={{ delay: 1 }}
              className="border border-white p-5  rounded-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
