import React from 'react';
import SelectedTask from '../SelectedTask/SelectedTask';
const TaskStatus = ({ task  }) => {
 
    // console.log(task)
    return (
          <div className="">
            <h1>{task.title}</h1>
           
        </div>
    );
};

export default TaskStatus;