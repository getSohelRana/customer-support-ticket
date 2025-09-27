import React from 'react';

const SectionTitle = () => {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 text-2xl font-bold container mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2">
               <h1>Customer Tickets</h1>
            </div>
            <div className="">
                <h1 className=''>Task Status</h1>
            </div>
        </div>
    );
};

export default SectionTitle;