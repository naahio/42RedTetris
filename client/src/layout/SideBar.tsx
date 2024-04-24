//@ts-ignore
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";


function Sidebar() {
    // const navRef = useRef();

    // const showSideBar = () => {
    //     navRef.current.classList.toggle('hidden');
    // }

    return (
        <aside>
            <div className='md:hidden justify-between border-r h-full bg-darkBlue2 pt-1 flex-col border'>
                <button className='border'>
                    <AiOutlineBars />
                </button>
                <div className='flex flex-col text-white space-y-4 mt-4'>
                    <Link to="/" className='hover:text-lightRed'>
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;