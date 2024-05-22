import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const navigate = useNavigate();

function SignUp() {
    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // navigate('/Queue');
        console.log('Sign Up form submitted');
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
            width: '90%', 
            maxWidth: '600px'
        }}>
            <h2 className=''>Sign Up with Email</h2>
            <form onSubmit={handleSignUp} className='flex flex-col items-center space-y-2 w-full max-w-sm'>
                <input className='border rounded-md w-full input-placeholder' placeholder='FirstName' type="text" name="firstName" required />
                <input className='border rounded-md w-full input-placeholder' placeholder='LastName' type="text" name="lastName" required />
                <input className='border rounded-md w-full input-placeholder' placeholder='NickName' type="text" name="nickName" required />
                <input className='border rounded-md w-full input-placeholder' placeholder='Email' type="email" name="email" required />
                <input className='border rounded-md w-full input-placeholder' placeholder='password' type="password" name="password" required />
                <Link to='/Queue'><button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed w-full'>Sign Up</button></Link>
            </form>

            <h2>or</h2>
            <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed'>Continue with Google</button>
            <button type="submit" className='border rounded-md border-lightRed hover:bg-lightRed'>Continue with 42-Intra</button>
            <h2>Already have an Account? <button className='text-lightRed'>Log In</button></h2>
            <p className='text-sm'>By continuing, you agree to our terms & conditions.<br />
            Privacy Policy and Security Policy</p>
        </div>
    );
}

export default SignUp;
