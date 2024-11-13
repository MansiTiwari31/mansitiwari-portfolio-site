import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string; // The text to display
  speed?: number; // Optional speed (default is 100ms)
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>(''); // State to store the currently displayed text
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) clearInterval(interval);
    }, speed);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

export default TypingAnimation;
