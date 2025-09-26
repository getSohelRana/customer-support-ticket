import React  from 'react';
import calendarIcon from '../../assets/calendar.png';
const ShowTickets = ({ ticket }) => {
    console.log(ticket)
    
    return (
        
        <div className='shadow-sm p-3 rounded-xl bg-gray-50'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-semibold text-[20px]'>{ticket.title}</h2>
                </div>
                <div className='bg-green-300 px-5 py-1 rounded-2xl flex items-center gap-2 text-xl font-semibold text-green-800'>
                    <span className='bg-green-600 w-[15px] h-[15px] rounded-full'> </span>
                    <p >{ticket.status}</p>
                </div>
            </div>
            <p className='my-3'>{ticket.description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <p># <span>{ticket.id}</span></p>
                    <p >{ticket.priority}</p>
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