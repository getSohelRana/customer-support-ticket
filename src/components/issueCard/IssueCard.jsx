import React, { use } from 'react';
import ShowTickets from '../ShowTicketCards/ShowTickets';
import TaskStatus from '../taskStatus/TaskStatus';
import SelectedTask from '../SelectedTask/SelectedTask';
const IssueCard = ({ ticketPromise, setProgress, task, setTask }) => {
    const ticketData = use(ticketPromise);
    // console.log(ticketData)
    // console.log(task)
    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 container mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2">
                {
                    ticketData.map((ticket, idx) => <ShowTickets task={task} setTask={setTask} setProgress={setProgress} key={idx} ticket={ticket}></ShowTickets>)
                }
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow">
                {
                    task.map((task, idx) => <SelectedTask key={idx} task={task} setTask={setTask} ></SelectedTask>)
                }
            </div>
        </div>
    );
};

export default IssueCard;