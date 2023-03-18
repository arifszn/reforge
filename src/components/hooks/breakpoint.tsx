import { useEffect, useState } from 'react';

const useBreakpoint = (breakPoint = 768) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakPoint;
};

export default useBreakpoint;
