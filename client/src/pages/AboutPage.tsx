//@ts-ignore
import React from 'react';

function AboutPage() {
    return (
        <div className="flex flex-col h-[100%] w-[100%]  border text-white text-base items-center ">
        <h3>Welcome to our project, <span className='text-xl text-lightRed'>RedTetris!</span></h3>

        <p>What is RedTetris?
        RedTetris is an exciting project developed as part of the 42 Network community. It is an online multiplayer version of the classic game Tetris. Our goal is to bring the timeless enjoyment of Tetris to a multiplayer platform, allowing players to compete against each other in real-time, adding a new dimension of challenge and fun to the game.

        Our Mission
        At RedTetris, our mission is to create a vibrant and engaging gaming experience that brings people together from all walks of life. We believe in the power of games to foster connections, stimulate creativity, and provide moments of joy and excitement.

        Project Development
        RedTetris is a collaborative project developed by passionate developers within the 42 Network community. Our team is dedicated to delivering high-quality gameplay, innovative features, and a seamless online experience for players around the world.

        Join Us
        We invite you to join us on this journey as we continue to develop and improve RedTetris. Whether you're a seasoned Tetris player or new to the game, there's a place for you in our community. Connect with us, share your feedback, and let's shape the future of gaming together!
        </p>
        <p>Contact Us :
        Have questions, suggestions, or just want to say hello? Feel free to reach out to us at 
        <p className='underline decoration-indigo-500 text-white hover:text-lightRed'>contact@redtetris.com </p>
        <p >We'd love to hear from you ! Have Fun  \(^.^)/</p></p>
        </div>
    )
}

export default AboutPage;