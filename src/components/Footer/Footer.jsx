import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='bg-black '>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6 container mx-auto py-5 px-2">
                <div className="text-justify">
                   <h3 className='text-[30px] mb-4 text-white'>CS — Ticket System</h3>
                   <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="">
                    <h3 className='text-[30px] mb-4 text-white'>Company</h3>
                    <div className='flex flex-col gap-3 text-gray-400'>
                        <a href="http://#">About Us</a>
                        <a href="http://#">Our Mission</a>
                        <a href="http://#">Contact Us</a>
                    </div>
                </div>
                <div className="">
                    <h3 className='text-[30px] mb-4 text-white'>Service</h3>
                    <div className='flex flex-col gap-3 text-gray-400'>
                        <a href="http://#">Products & Services</a>
                        <a href="http://#">Customer Stories</a>
                        <a href="http://#">Download Apps</a>
                    </div>
                </div>
                <div className="">
                    <h3 className='text-[30px] mb-4 text-white'>Information</h3>
                    <div className='flex flex-col gap-3 text-gray-400'>
                        <a href="http://#">Privacy Policy</a>
                        <a href="http://#">Terms & Conditions</a>
                        <a href="http://#">Join Us</a>
                    </div>
                </div>
                <div className="">
                    <h3 className='text-[30px] mb-4 text-white'>Social Links</h3>
                    <div className='flex flex-col gap-3 text-gray-400'>
                        <a className='flex gap-3 items-center' href="http://#"> <FaTwitter size={30} /> @ cs-ticket system</a>
                        <a className='flex gap-3 items-center' href="http://#"> <TbBrandLinkedinFilled size={30} /> @ cs-ticket system</a>
                        <a className='flex gap-3 items-center' href="http://#"> <FaFacebook size={30} /> @ cs-ticket system</a>
                        <a className='flex gap-3 items-center' href="http://#"> <AiOutlineMail size={30} />   support@gmail.com system</a>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;