import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.png';
import close from '../assets/images/close.png';
import Signup from '../components/login/singUp';
import OTP from '../components/login/OtpField';

function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [closeMenu, setcloseMenu] = useState(true);
    const [showSignup, setShowSignup] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = () => {
        return false; 
    };

    const handlePlayClick = () => {
        if (isAuthenticated()) {
            navigate('/Queue');
        } else {
            setShowSignup(true);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setcloseMenu(!closeMenu);
    };

    return (
        <header>
            <nav className='z-0'>
                <div className='md:border-b border-sidebar bg-darkBlue0 md:bg-darkBlue2 relative'>
                    <div className='flex justify-center items-center px-4 py-2 '>
                        <div className='flex justify-center  md:w-[40%]'>
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        {!isSmallScreen && (
                            <div className='flex flex-row md:w-[60%] justify-between '>
                                <div className='flex justify-around h-[60px] bg-darkBlue2 pt-1'>
                                    <div className='flex items-center text-white space-x-20'>
                                        <Link to="/" className='flex hover:text-lightRed'>
                                            <span className=''>Home</span>
                                        </Link>
                                        <Link to="/about" className='flex hover:text-lightRed'>
                                            <span className=''>About</span>
                                        </Link>
                                        <Link to="/contact" className='flex hover:text-lightRed'>
                                            <span className=''>Contact</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex w-[70%] items-center justify-center min-w-[69px] max-w-[150px]'>
                                    <Link to="#" className='flex justify-center items-center bg-lightRed rounded-md text-white h-[80%] w-[60%] '>
                                      <button className='' onClick={handlePlayClick}>
                                            play
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {isSmallScreen && menuOpen && (
                        <div className="absolute top-full left-0 w-full bg-darkBlue2 mt-[24px] flex items-end justify-center">
                            <div className="flex flex-col px-4 py-2 border items-center justify-center">
                                <Link to="/" className='block text-white hover:text-lightRed'>
                                    Home
                                </Link>
                                <Link to="/contact" className='block text-white hover:text-lightRed mt-2'>
                                    Contact
                                </Link>
                                <Link to="/about" className='block text-white hover:text-lightRed mt-2'>
                                    About us
                                </Link>
                                <Link to="#" className='flex justify-center items-center bg-lightRed rounded-md text-white w-[80%] '>
                                    <button className='' onClick={handlePlayClick}>
                                        play
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                {isSmallScreen && (
                    <div className='block md:hidden bg-darkBlue2 items-center'>
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <img src={menuOpen ? close : menu} className="material-symbols-outlined" alt="Menu Icon" />
                        </button>
                    </div>
                )}
            </nav>
            {showSignup && <Signup showSignup={showSignup} setShowSignup={setShowSignup} setShowOPT={setShowOTP}/>}
            {!showSignup && showOTP && <OTP showSignup={showSignup} setShowSignup={setShowSignup} setShowOPT={setShowOTP}/>}
        </header>
    );
}

export default Header;
