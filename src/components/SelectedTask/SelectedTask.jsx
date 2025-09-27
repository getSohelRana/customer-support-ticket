import React from 'react';

const SelectedTask = ({ task, removeTask , setProgress }) => {
    const handleRemove = (id) => {
        setProgress( result => result - 1);
        removeTask(id); 
    };

    return (
        <div className="bg-gray-200 p-4 rounded-xl shadow mb-3 ">
            <h1 className='text-2xl font-semibold'>{task.title}</h1>
            <button 
                onClick={handleRemove} 
                className='btn bg-green-500 border-0 shadow-none w-full text-xl my-2'
            >
                Complete
            </button>
        </div>
    );
};

export default SelectedTask;
