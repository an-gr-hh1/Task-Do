import React from 'react';
import { motion } from "framer-motion"
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import RemoveIcon from '@mui/icons-material/Remove';

const TodoComponent = React.memo(({ task, deleteTask, toggleCompleted }) => {
    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
            <div className={`flex justify-between items-center rounded-2xl px-5 py-2 mb-2 ${task.completed ? 'bg-gray-200' : 'bg-green-100'}`}>
                <div className='flex flex-row gap-2 cursor-pointer select-none items-center' onClick={() => toggleCompleted(task.id)}>
                    {task.completed ? (
                        <div>
                            <Tooltip title="Completed" placement="bottom">
                                <DoneIcon/>
                            </Tooltip>
                        </div>
                    ) : (
                        <div>
                            <Tooltip title="Pending" placement="bottom">
                                <RemoveIcon/>
                            </Tooltip>
                        </div>
                    )}
                    <div className='flex flex-col p-2'>
                        <span 
                            className={`flex-1  ${task.completed ? 'line-through text-slate-400' : ''}`}>
                            {task.text}
                        </span>
                        <span 
                            className={`flex-1 text-xs text-slate-500  ${task.completed ? 'opacity-50' : ''}`}>
                            {task.desc}
                        </span>
                    </div>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Chip label={task.priority} size="small" color="success" variant="outlined"/>
                    <Tooltip title="Delete" placement="bottom">
                        <button
                            className='text-slate-700 hover:text-violet-800 px-2 py-1 rounded'
                            onClick={() => deleteTask(task.id)}
                        >
                            <DeleteIcon />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </motion.div>
    );
});

export default TodoComponent;
