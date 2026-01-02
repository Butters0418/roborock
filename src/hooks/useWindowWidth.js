// ex:let ww = useWindowWidth();
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId = null;

    function handleResize() {
      // Debounce 150ms
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
