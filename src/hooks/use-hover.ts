import { useEffect, useRef, useState } from 'react';

export default function useHover<T extends HTMLElement>() {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    function handleMouseEnter() {
      setIsHovered(true);
    }

    function handleMouseOut() {
      setIsHovered(false);
    }

    target.addEventListener('mouseenter', handleMouseEnter);
    target.addEventListener('mouseleave', handleMouseOut);

    return () => {
      target.removeEventListener('mouseenter', handleMouseEnter);
      target.removeEventListener('mouseleave', handleMouseOut);
    };
  }, []);

  return {
    targetRef,
    isHovered,
  };
}
