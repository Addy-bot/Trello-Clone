import React, { useState, useEffect } from "react";

const CompletingText = ({ text, completionTime }) => {
    const [completedText, setCompletedText] = useState('');
    const [showSymbol, setShowSymbol] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex === text.length - 1) {
                setShowSymbol(false);
                clearInterval(interval);
            } else {
                setCompletedText(prevText => prevText + text[currentIndex]);
                currentIndex++;
            }
        }, completionTime / text.length); // Adjust completion time based on the length of the text
        return () => clearInterval(interval);
    }, [text, completionTime]);

    return <div>
        {completedText}
        {showSymbol && <span>|</span>}</div>;
};

export default CompletingText;