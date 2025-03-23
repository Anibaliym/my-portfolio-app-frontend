import React, { useEffect, useRef } from 'react';
import '/src/assets/css/LightCursorEffect.css'; 

const LightCursorEffect = () => {
    const lightRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        const light = lightRef.current;
        if (light) {
          const { clientX: x, clientY: y } = e;
          light.style.left = `${x}px`;
          light.style.top = `${y}px`;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    return (
      <div className="light-container">
        <div ref={lightRef} className="light"></div>
      </div>
    );
};

export default LightCursorEffect;