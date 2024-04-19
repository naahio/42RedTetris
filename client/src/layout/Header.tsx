import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <div className='flex flex-row space-x-4 border-b h-18 bg-cyan-950'>
                    <div>
                        <img src="../images/LOGO.png"/>
                    </div>
                    <div className='flex flex-center '>
                        <Link to="/contact">
                            Contact
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className='flex flex-row-reverse'>
                        play
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
