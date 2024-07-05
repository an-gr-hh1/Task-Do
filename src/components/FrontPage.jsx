import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/custom.css'; 
import AnimationPage from './AnimationPage';

function FrontPage () {
  return (
    <div className=" flex h-screen mt-0">
      <div className="w-3/4 flex flex-col justify-center items-center p-10">
        <div className='ml-52'>
          <h1 className="text-4xl font-bold whitespace-nowrap font-mono">Hi, Welcome to</h1>
          <p className='font-bold text-violet-900' style={{fontSize: '4.2rem'}}> Task Do </p>
          <p className="text-xl mt-5 mb-4">This is a simple ToDo List react project using MUI, Tailwind CSS, and Framer Motion.</p>
          <div>
            <Link to="/list">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div 
        className="w-full custom-bg flex justify-center items-center">
        <motion.div
          initial={{ opacity:0 }} 
          animate={{ opacity:1 }}
          transition={{ duration: 2, loop: Infinity, ease: "linear" }}
        >
          <AnimationPage />
        </motion.div>
      </div>
    </div>
  );
};

export default FrontPage;
