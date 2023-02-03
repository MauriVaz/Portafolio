import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
    const texts = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Next Js'];
    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index + 1) % texts.length);
            setCurrentText(texts[index]);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [index, texts]);

    return (
        <div className="text-animation">
            <h1 className={`text-5xl font-bold p-4 rounded-3xl text-center my-4 animate-textrotate overflow-hidden
            ${currentText === "HTML" && 'bg-orange-600 text-white'}
            ${currentText === "CSS" && 'bg-[#264de4] text-white'}
            ${currentText === "Javascript" && 'bg-[#f7df1e] text-black'}
            ${currentText === "Typescript" && 'bg-[#2d79c7] text-white'}
            ${currentText === "React" && 'bg-[#0dd2f6] text-white'}
            ${currentText === "Next Js" && 'bg-white text-black'}
            ${currentText === "Mongo DB" && 'bg-[#4faa41] text-black'}
            `}>{currentText}</h1>
        </div>
    );
};

export default TextAnimation;
