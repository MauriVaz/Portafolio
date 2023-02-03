import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
    // const texts = ['HTML', 'CSS', 'Javascript'];
    // const [currentText, setCurrentText] = useState(texts[0]);
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setIndex((index + 1) % texts.length);
    //         setCurrentText(texts[index]);
    //     }, 5000);
    //     return () => clearInterval(intervalId);
    // }, [index, texts]);

    return (
        <div className='overlow-hidden'>
            {/*Este es words */}
            <span className='animate-textrotate'>CSS</span>
            <span className='animate-textrotate'>Javascript</span>
            <span className='animate-textrotate'>Typescript</span>
        </div>
    );
};

export default TextAnimation;
