import React from 'react';

const Navar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className=" -ml-4 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Change Log</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    </div>
                    <a className="btn bg-white shadow-none border-0 text-black -ml-5 text-sm">CS Ticket System</a>
                </div>
                <div className="navbar-end  w-full hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Change Log</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-br from-[#632EE3]  to-[#9F62F2] border-0 shadow-none">+ New Ticket</a>
                </div>
                </div>
        </div>
    );
};

export default Navar;