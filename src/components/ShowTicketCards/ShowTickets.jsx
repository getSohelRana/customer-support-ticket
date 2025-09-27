import React  from 'react';
import calendarIcon from '../../assets/calendar.png';
import { toast } from 'react-toastify';
const ShowTickets = ({ ticket, setProgress , task , setTask }) => {
    // console.log(ticket)

    const priorityBg = {
        "High Priority" : "text-red-600",
        "Medium Priority" : "text-yellow-600",
        "Low" : "text-green-600"
    }

    const statusBg = {
        "Open" : "bg-green-200",
        "In Progress" : "bg-yellow-200"
    }
     const statusActive = {
        "Open" : "bg-green-500",
        "In Progress" : "bg-yellow-500"
    }
    const handleProgress = (ticketInfo) => {
        setProgress( result => result + 1);
        toast.success('Seleted')
        setTask([...task , ticketInfo])
    };

    return (
        
        <div onClick={() => handleProgress(ticket)}  className='shadow-sm p-3 rounded-xl bg-gray-50 cursor-pointer'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-semibold text-[20px]'>{ticket.title}</h2>
                </div>
                <div className= {` ${statusBg[ticket.status]} px-5 py-1 rounded-2xl flex items-center gap-2 text-xl font-semibold text-green-800`}>
                    <span className={`${statusActive[ticket.status]} w-[15px] h-[15px] rounded-full`}> </span>
                    <p>{ticket.status}</p>
                </div>
            </div>
            <p className='my-3'>{ticket.description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <p># <span>{ticket.id}</span></p>
                    <p className={priorityBg[ticket.priority]}>{ticket.priority}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{ticket.customer}</p>
                    <img className='w-[20px] h-[20px]' src={calendarIcon} alt="" />
                    <p> {ticket.createdAt}</p>
                </div>
            </div>
        </div>

    )
};

export default ShowTickets;