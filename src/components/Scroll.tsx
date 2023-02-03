import { AiOutlineArrowUp } from 'react-icons/ai';
import React from 'react';
const Scroll = () => {
    const scrollToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='relative'>
            <button
                className="fixed bottom-0 right-0 bg-green-600 justify-center align-center p-2"
                onClick={() => {
                    scrollToTop();
                }}>
                <AiOutlineArrowUp />
            </button>
        </div>
    );
};

export default Scroll;