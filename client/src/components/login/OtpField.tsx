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

    const handelPassInput = (event:any) => {
        const form = event.target.form;
        const index = [...form].indexOf(event.target);
        form[index + 1].focus();
        event.preventDefault();
    }

    return (
        <div className='flex modal-container w-full h-full
            w-full h-[1000px] z-20 bg-neutral-100 
            items-center justify-center' onClick={()=>setShowOPT(false)}>
            <div className='flex flex-col bg-darkBlue1  w-[90%] max-w-[690px] z-40  justify-around h-[15%]
            rounded-lg shadow-md items-center' onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-col items-center  cursor-pointer	w-full'>
                    <h2 >Validate your Email</h2>
                    <IoMdCloseCircle onClick={() => setShowOPT(false)} className='flex self-end mb-3'/>
                </div>
                <form onSubmit={handleSignUp} className='flex flex-col space-y-6 items-center space-y-2 w-full max-w-sm'>
                    <div className='flex flex-row space-x-3 '>
                        <input className='border numberInput w-[40px] h-[40px] rounded-md w-full' type='number' required min="0" max="9" step="1" 
                            onChange={(e) => {setFirstDegit(Number(e.target.value)), handelPassInput(e)}}
                            />
                        <input className='border numberInput w-[40px] h-[40px] rounded-md w-full 'type='number' required min="0" max="9" step="1" 
                            onChange={(e) => {setSecondDegit(Number(e.target.value)), handelPassInput(e)}}
                            />
                        <input className='border numberInput w-[40px] h-[40px] rounded-md w-full ' type='number' required min="0" max="9" step="1" 
                            onChange={(e) => {setThirdDegit(Number(e.target.value)), handelPassInput(e)}}
                            />
                        <input className='border numberInput w-[40px] h-[40px] rounded-md w-full ' type='number' required min="0" max="9" step="1" 
                            onChange={(e) => {setFourthDegit(Number(e.target.value)), handelPassInput(e)}}
                            />
                        <input className='border numberInput w-[40px] h-[40px] rounded-md w-full ' type='number' required min="0" max="9" step="1" 
                            onChange={(e) => {setFifthDegit(Number(e.target.value)), handelPassInput(e)}}
                            />
                        <input className='border numberInput w-[40px] h-[40px] rounded-md w-full ' type='number' required min="0" max="9" step="1" 
                            onChange={(e) => {setSixthDegit(Number(e.target.value)), handelPassInput(e)}}
                            />
                    </div>
                    <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed w-[50%]'>Validate</button>
                </form>
            </div>
        </div>
    );
}

export default OTP;
