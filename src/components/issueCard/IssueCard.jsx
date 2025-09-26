import React, { use } from 'react';
import ShowTickets from '../ShowTicketCards/ShowTickets';
const IssueCard = ({ ticketPromise , setProgress}) => {
    const ticketData = use(ticketPromise);
    // console.log(ticketData)
    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2">
               {
                ticketData.map((ticket, idx) => <ShowTickets setProgress = {setProgress}  key={idx} ticket={ticket}></ShowTickets>)
               }
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow">
                
            </div>
        </div>
    );
};

export default IssueCard;