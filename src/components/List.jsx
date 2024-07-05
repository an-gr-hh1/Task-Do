import React, { useState } from 'react';
import TodoComponent from './TodoComponent';

import done from '../assets/todolist.svg'
import city from '../assets/city.svg'

import AddIcon from '@mui/icons-material/Add';

import { motion } from "framer-motion"
import Divider from '@mui/material/Divider';


function List() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            completed: true,
            desc: 'Visit doctor from Mary Queens',
            priority: 'home',
        },
        {
            id: 2,
            text: 'Study React',
            completed: false,
            desc: 'Study React from youtube',
            priority: 'work',
        }
    ]);

    const [text, setText] = useState('');

    const [desc, setDesc] = useState('');

    const [isShow,setShow] = useState(false);

    const [selectedValue, setSelectedValue] = useState(null);

    const handleCheckboxChange = (event) => {
        setSelectedValue(event.target.value);
      };


    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const addTask = (text,desc,selectedValue) => {
        if (text.trim()) {
            const newTask = {
                id: Date.now(),
                text,
                completed: false,
                desc,
                priority: selectedValue,
            };
            setTasks([...tasks, newTask]);
            setText('');
            setDesc('');
            setSelectedValue('');
        }
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    return (
        <div className='w-1/3 h-auto flex flex-col gap-3 p-4 mt-16'>
            <div className='border border-slate-50 rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
                    <p className='mb-3 text-3xl font-bold flex justify-center bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent'>MY TASKS</p>
                    <div className='flex flex-col mb-4'>
                        <img src={done} alt="Some Image" className=' ml-auto mr-auto w-2/3 h-2/3'/>
                        <div className='flex flex-row mb-4' onClick={() => setShow(true)}>
                            <input
                                type="text"
                                value={text}
                                placeholder='Add your Task'
                                className='flex-1 p-3 border w-full border-slate-300 rounded-xl'
                                onChange={handleInputChange}
                            />
                        </div>
                        {isShow && <div className='mb-10'>
                            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
                                <div>
                                    <textarea
                                        value={desc}
                                        rows={4}
                                        cols={40}
                                        placeholder='Add task Description'
                                        className='flex-1 p-3 border w-full h-24 border-slate-300 rounded-xl'
                                        onChange={handleDescChange}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <ul className="priority flex gap-2 p-5 list-none">
                                        <li className="inline">
                                            <input
                                                type="checkbox"
                                                id="checkboxOne"
                                                value="home"
                                                checked={selectedValue === "home"}
                                                onChange={handleCheckboxChange}
                                                className="absolute opacity-0"
                                            />
                                            <label
                                                htmlFor="checkboxOne"
                                                className={`inline-block bg-opacity-90 border border-gray-300 hover:border-violet-600 hover:text-violet-600 text-gray-500 rounded-3xl whitespace-nowrap m-1 px-3 py-2 cursor-pointer transition-all ${
                                                selectedValue === "home" ? 'border-violet-600 bg-violet-600 text-white hover:text-white' : ''
                                                }`}
                                            >
                                                Home
                                            </label>
                                        </li>
                                        <li className="inline">
                                            <input
                                                type="checkbox"
                                                id="checkboxTwo"
                                                value="work"
                                                checked={selectedValue === "work"}
                                                onChange={handleCheckboxChange}
                                                className="absolute opacity-0"
                                            />
                                            <label
                                                htmlFor="checkboxTwo"
                                                className={`inline-block bg-opacity-90 border border-gray-300 hover:border-violet-600 hover:text-violet-600 text-gray-500 rounded-3xl whitespace-nowrap m-1 px-3 py-2 cursor-pointer transition-all ${
                                                selectedValue === "work" ? 'border-violet-600 bg-violet-600 text-white hover:text-white' : ''
                                                }`}
                                            >
                                                Work
                                            </label>
                                        </li>
                                        <li className="inline">
                                            <input
                                                type="checkbox"
                                                id="checkboxThree"
                                                value="personal"
                                                checked={selectedValue === "personal"}
                                                onChange={handleCheckboxChange}
                                                className="absolute opacity-0"
                                            />
                                            <label
                                                htmlFor="checkboxThree"
                                                className={`inline-block bg-opacity-90 border border-gray-300 hover:border-violet-600 hover:text-violet-600 text-gray-500 rounded-3xl whitespace-nowrap m-1 px-3 py-2 cursor-pointer transition-all ${
                                                selectedValue === "personal" ? 'border-violet-600 bg-violet-600 text-white hover:text-white' : ''
                                                }`}
                                            >
                                                Personal
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex justify-center mb-10'>
                                    <button
                                        className='w-36 p-2 flex justify-center items-center gap-1 bg-violet-600 border border-violet-600 text-white font-bold rounded-xl hover:text-violet-600 hover:bg-transparent ease-in'
                                        onClick={() => {
                                            addTask(text,desc,selectedValue),
                                            setShow(false)}}
                                    >
                                        <span className='font-medium'>Add Task</span><AddIcon fontSize="lg" />
                                    </button>
                                </div>
                            </motion.div>
                            <Divider />
                        </div>}
                    </div>
                </motion.div>
                {tasks.length === 0 ? (
                    <div className='flex flex-col items-center mt-4'>
                        <img src={city} alt="Some Image" className='w-4/5 h-4/5'/>
                        <span className='text-gray-500 text-lg'>Hey! What are you upto today?</span>
                    </div>
                ) : (
                <div className='max-h-72 overflow-y-auto'>
                    {tasks.map((task) => (
                        <TodoComponent
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                        />
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}

export default List;
