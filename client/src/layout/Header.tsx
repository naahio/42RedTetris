//@ts-ignore
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Sidebar from './SideBar';
import { AiFillContacts, AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { IoGameController } from "react-icons/io5"; 

function Header() {

    return(
            <header >
                <nav>
                    <div className='flex justify-around border-b h-[60px] bg-darkBlue2 pt-1'>
                        <div className='flex ml-10 w-[9%] items-center justify-center'>
                            <Link to="/">
                                <img src={logo} />
                            </Link>
                        </div>
                        <div className='flex items-center text-white space-x-20' >
                            <Link to="/" className='flex hover:text-lightRed'>
                                <AiFillHome />
                                <span className='hidden md:visible'>Home</span>
                            </Link>
                            <Link to="/about" className='flex hover:text-lightRed'>
                                <AiFillContacts />
                                <span className='hidden md:visible'>About</span>
                            </Link>
                            <Link to="/contact" className='flex hover:text-lightRed'>
                                <AiFillInfoCircle />
                                <span className='hidden md:visible'>Contact</span>
                            </Link>
                        </div>
                        <div className='flex w-[9%] items-center justify-center min-w-[69px] max-w-[97px]'>
                            <Link to="/game" className='flex justify-center items-center bg-lightRed rounded-md text-white h-[80%] w-[80%] '>
                                <IoGameController />
                                <button className='hidden'>
                                    play
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* <Sidebar /> */}
            </header>
    )
}

export default Header;

