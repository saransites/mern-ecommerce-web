import React from 'react'
import { Link } from 'react-router-dom';
import Footercontents from './footercontents'
import { FaInstagram,FaWhatsapp,FaTwitter } from "react-icons/fa";
const Footer = () => {
    const details=[
        {
            title:"HELP",
            content:["SHIPPING & RETURNS","STORE & POLICY","PAYMENT METHODS","FAQ"]
        },
        {
            title:"CONTACT",
            content:["123-456-7890","INFO@MY-DOMAIN.COM"]
        },
    ]
  return (
    <footer className='px-6 p-6 flex flex-col items-center text-center gap-4'>
        {
            details.map((item,index)=>{
                return (<div key={index} className='flex flex-col gap-3'>
                    <h1 className='font-bold text-lg'>{item.title}</h1>
                    <Footercontents content={item.content}/>
                    </div>)
            })
        }
        <div className='flex gap-4'>
            <a href="#">
                <FaInstagram className='text-xl'/>
            </a>
            <a href="#">
                <FaWhatsapp className='text-xl'/>
            </a>
            <a href="#">
                <FaTwitter className='text-xl'/>
            </a>
        </div>
        <ul className='flex gap-4'>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
            <Link to="/About">About Me</Link>
          </li>
          <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
            <Link to="/Contact">Contact Me</Link>
          </li>
        </ul>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-lg'>NEWS LETTER</h1>
            <label>Enter your Email</label>
            <input type="email" className='border-2 rounded border-black p-1' placeholder='Enter your email...' />
            <a href="#" className='bg-[#3e442b] p-2 text-white'>Subscribe</a>
        </div>
        <p>&copy; 2024 | Built with Saran</p>
    </footer>
  )
}

export default Footer