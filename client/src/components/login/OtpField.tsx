import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";
import { OTPForm } from '../../interfaces/data';

interface SignupProps {
    showSignup: boolean;
    setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
    setShowOPT: React.Dispatch<React.SetStateAction<boolean>>;
}

function OTP({setShowOPT}: SignupProps) {
    const [fistDegit, setFirstDegit] = useState(0);
    const [secondDegit, setSecondDegit] = useState(0);
    const [thirdDegit, setThirdDegit] = useState(0);
    const [fourthDegit, setFourthDegit] = useState(0);
    const [fifthDegit, setFifthDegit] = useState(0);
    const [sixthDegit, setSixthDegit] = useState(0);

    const navigate = useNavigate();
    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        const otpForm: OTPForm = {
            firstDegit: fistDegit,
            secondDegit: secondDegit,
            thirdDegit: thirdDegit,
            fourthDegit: fourthDegit,
            fifthDegit: fifthDegit,
            sixthDegit: sixthDegit,
        }
        console.log(otpForm);
        event.preventDefault();
        setShowOPT(false);
        navigate('/Queue');
    };

    return (
        <div className='flex flex-col bg-darkBlue1 rounded-lg shadow-md items-center' 
            style={{
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            padding: '20px', 
            zIndex: 1000, 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '50%', 
            maxWidth: '600px'
        }}>
            <div className='flex flex-col items-center  cursor-pointer	w-full'>
                <h2 >Validate your Email</h2>
                <IoMdCloseCircle onClick={() => setShowOPT(false)} className='flex self-end mb-3'/>
            </div>
            <form onSubmit={handleSignUp} className='flex flex-col space-y-6 items-center space-y-2 w-full max-w-sm'>
                <div className='flex flex-row space-x-3 '>
                    <input className='border numberInput rounded-md w-full'  required 
                        onChange={(e) => setFirstDegit(Number(e.target.value))}
                        />
                    <input className='border numberInput rounded-md w-full ' required 
                        onChange={(e) => setSecondDegit(Number(e.target.value))}
                        />
                    <input className='border numberInput rounded-md w-full '  required 
                        onChange={(e) => setThirdDegit(Number(e.target.value))}
                        />
                    <input className='border numberInput rounded-md w-full '  required 
                        onChange={(e) => setFourthDegit(Number(e.target.value))}
                        />
                    <input className='border numberInput rounded-md w-full '  required 
                        onChange={(e) => setFifthDegit(Number(e.target.value))}
                        />
                    <input className='border numberInput rounded-md w-full '  required 
                        onChange={(e) => setSixthDegit(Number(e.target.value))}
                        />
                </div>
                <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed w-[50%]'>Validate</button>
            </form>
        </div>
    );
}

export default OTP;
