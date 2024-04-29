//@ts-ignore
import React from 'react';
import TetrisBoard from '../components/TetrisBoard.tsx';

function HomePage() {
    
    return (
        <div className='flex flex-col w-[100%] h-[100%] '>
            <div className='text-lg text-white text-5xl  h-[30%] md:h-[35%] font-Aclonica  pt-[60px] lg:pt-[20had0px] pl-[60px] md:pl-[70px]'>
                <p>Stack, Play ,</p>
                <p>Conquer !</p>
                <p ><span className=' text-lightRed'>Red Tetris </span>awaits your moves!</p>
            </div>
            <div id="Board" className='flex h-[40%] sm:h-[70%] md:h-[55%] w-[100%]'>
                <TetrisBoard /> 
            </div>
        </div>
    );
}

export default HomePage;
