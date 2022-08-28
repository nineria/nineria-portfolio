import React, { useEffect, useState } from 'react';

const content = "Hello, I'm an front-end web developer based in Thailand!";

const TypeWriter = ({ speed = 1000 }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animation);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index]);

  return <div>{displayedContent}</div>;
};

export default TypeWriter;
