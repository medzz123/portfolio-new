import { useEffect, useRef, useState } from 'react';

export const useReadingTime = () => {
  const [readingLength, setReadingLength] = useState({ min: 0, max: 0 });

  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const text = articleRef.current?.textContent;

    if (text) {
      const textLength = text.trim().split(/\s+/).length;

      const minTime = Math.ceil(textLength / 200);
      const maxTime = Math.ceil(textLength / 130);

      setReadingLength({
        min: minTime === maxTime ? minTime - 1 : minTime,
        max: maxTime,
      });
    }
  }, []);

  return { readingLength, articleRef };
};
