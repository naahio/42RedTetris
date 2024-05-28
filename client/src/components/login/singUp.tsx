import React, { useState } from 'react';
import { SignUpForm } from '../../interfaces/data';
import { IoMdCloseCircle } from "react-icons/io";

interface SignupProps {
    showSignup: boolean;
    setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
    setShowOPT: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUp({setShowSignup, setShowOPT}: SignupProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Signform: SignUpForm = {
        firstName: firstName,
        lastName: lastName,
        nickName: nickName,
        email: email,
        password: password,

    }

    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowSignup(false);
        setShowOPT(true);
        console.log(Signform);
    };

    return (
        <div className='flex modal-container w-full h-full
            w-full h-[1000px] z-20 bg-neutral-100 
        items-center justify-center' onClick={()=>setShowSignup(false)}>
            <div className='flex flex-col bg-darkBlue1 w-[90%] max-w-[690px] z-40 
            rounded-lg shadow-md items-center' onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-col items-center  cursor-pointer	w-full'>
                    <h2 >Sign Up with Email</h2>
                    <IoMdCloseCircle onClick={() => setShowSignup(false)} className='flex self-end mb-3'/>
                </div>
                <form onSubmit={handleSignUp} className='flex flex-col items-center space-y-2 w-full max-w-sm'>
                    <input className='border rounded-md w-full input-placeholder' placeholder='FirstName' type="text" id="firstName" required 
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                    <input className='border rounded-md w-full input-placeholder' placeholder='LastName' type="text" id="lastName" required 
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    <input className='border rounded-md w-full input-placeholder' placeholder='NickName' type="text" id="nickName" required 
                        onChange={(e) => setNickName(e.target.value)}
                        />
                    <input className='border rounded-md w-full input-placeholder' placeholder='Email' type="email" id="email" required 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <input className='border rounded-md w-full input-placeholder' placeholder='password' type="password" id="password" required 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed w-full'>Sign Up</button>
                </form>

                <h2>or</h2>
                <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed w-[50%]'>Continue with Google</button>
                <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed w-[50%]'>Continue with 42-Intra</button>
                <h2>Already have an Account? <button className='text-lightRed'>Log In</button></h2>
                <p className='text-sm text-center'>By continuing, you agree to our terms & conditions.<br />
                Privacy Policy and Security Policy</p>
            </div>
        </div>
    );
}

export default SignUp;
