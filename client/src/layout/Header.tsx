//@ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';



function Header() {
    return(
        <header>
            <nav>
                <div className='flex justify-around border-b h-[60px] bg-darkBlue2 pt-1'>
                    <div className='flex ml-10 w-[9%] items-center justify-center'>
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className='flex items-center text-white space-x-20' >
                        <Link className= 'hover: text-lightRed ' to="/" >
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>
                    <div className='flex w-[9%] items-center justify-center min-w-[69px] max-w-[97px]'>
                        <Link to="/login" className='flex justify-center bg-lightRed rounded-md text-white h-[80%] w-[80%] '>
                            <button className=''>
                                play
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;