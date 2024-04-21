import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <div className='flex flex-row border-b'>
                    <div>
                        <img src="../images/LOGO.png"/>
                    </div>
                    <div className='flex flex-center '>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/contact">
                            Contact
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