//@ts-ignore
import React from 'react';
import TetrisBoard from './TetrisBoard'; // Import the TetrisBoard component

function HomePage() {
    
    return (
        <div className='flex flex-col w-[100%] h-[100%]'>
            <div className='text-lg text-white text-5xl h-[45%] font-Aclonica pt-[250px] pl-[70px]'>
                <p>Stack, Play ,</p>
                <p>Conquer !</p>
                <p ><span className=' text-lightRed'>Red Tetris </span>awaits your moves!</p>
            </div>
            <div className='flex  h-[55%]'>
                <TetrisBoard /> 
            </div>
        </div>
    );
}

export default HomePage;
