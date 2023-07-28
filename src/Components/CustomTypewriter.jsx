import React, { useState, useEffect } from 'react';

const CustomTypewriter = ({ text, delay }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      setTypedText((prevText) => {
        if (currentIndex >= text.length) {
          clearInterval(timer);
          return prevText;
        }
        return prevText + text[currentIndex++];
      });
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [text, delay]);

  return <span className='hero-typewriter'>{typedText}<br/></span>;
};

export default CustomTypewriter;