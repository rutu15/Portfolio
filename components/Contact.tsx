'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FacebookIcon,
  LinkedinIcon,
  GmailIcon,
  GithubIcon,
  SmallEmailIcon,
  SmallMobileIcon,
  SmallLocationIcon,
} from './Icons';

function Contact() {
  return (
    <div className="container flex-grow mx-auto mt-40 md:mt-10 lg:mt-7 xl:mt-4 p-5 ">
      <motion.p
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className=" text-white text-center text-2xl sm:text-5xl font-extrabold"
      >
        <span className="primary-text">Connect with Creativity:</span> Reach
        Out, Inspire, Collaborate – Your Ideas, Our Passion!
      </motion.p>

      <div className="mx-auto lg:flex w-full mt-24   ">
        <div className=" w-full   h-full lg:order-2 order-1">
          <form
            action="https://formspree.io/f/xbjnrgnn"
            method='post'
            className=" flex flex-col items-center space-y-8 border bg-white border-orange-300 p-12 rounded-lg ">
            <input
              name="name"
              type="text"
              className="w-full rounded-lg p-3 border border-orange-300 bg-transparent "
              placeholder="Enter Your Name"
              required
            />

            <input
              name="email"
              type="email"
              className="w-full rounded-lg p-3 border border-orange-300 bg-transparent"
              placeholder="Enter Your Email"
              required
            />

            <textarea
              name="message"
              className="w-full rounded-md p-3  border border-orange-300 bg-transparent"
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
              className="border primary-color  p-5  rounded-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        <div className=" text-white  h-full grid gap-16 lg:order-1 order-2 lg:w-7/12 w-full lg:mt-0 mt-12 pr-6 ">
          <div>
            <p className="text-4xl">
              {"Let's discuss on something  "}{' '}
              <span className="primary-text">cool {''}</span>together.
            </p>
          </div>
          <div className=" space-y-3  md:w-10/12 w-full ">
            <div className="flex p-3 hover:border hover:rounded-md hover:border-orange-300 hover:bg-neutral-800">
              <SmallEmailIcon />
              <span className="px-3">dodiyarutu15@gmail.com</span>
            </div>
            <div className="flex p-3 hover:border hover:rounded-md hover:border-orange-300 hover:bg-neutral-800">
              <SmallMobileIcon />
              <span className="px-3">+91-6354929578</span>
            </div>
            <div className="flex p-3 hover:border hover:rounded-md hover:border-orange-300 hover:bg-neutral-800">
              <SmallLocationIcon />
              <span className="px-3">Hamburg, Germany</span>
            </div>
          </div>

          <div className=" flex w-1/2 space-x-8 p-2">
            <div className="p-1  hover:rounded-full hover:bg-orange-300">
              <a href="#">
                <FacebookIcon />
              </a>
            </div>
            <div className="p-1 hover:rounded-full hover:bg-orange-300">
              <a href="https://www.linkedin.com/in/rutudodiya/" target="_blank">
                <LinkedinIcon />
              </a>
            </div>
            <div className="p-1  hover:rounded-full hover:bg-orange-300">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dodiyarutu15@gmail.com"
                target="_blank"
              >
                <GmailIcon />
              </a>
            </div>
            <div className="p-1  hover:rounded-full hover:bg-orange-300">
              <a href="https://github.com/rutu15" target="_blank">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
