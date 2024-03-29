"use client"

import { useState } from 'react';

const FloatingCard = () => {
  const [tiltValues, setTiltValues] = useState({ posX: 0, posY: 0 });

  // Function to update tilt values based on mouse position
  const handleMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const posX = (clientX - left - width / 2) / (width / 2) * 45;
    const posY = (clientY - top - height / 2) / (height / 2) * 45;
    setTiltValues({ posX, posY });
  };

  // Reset tilt values when mouse leaves the element
  const handleMouseLeave = () => {
    setTiltValues({ posX: 0, posY: 0 });
  };

  return (
    <div
      className="w-64 h-40 relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full bg-gray-100 bg-opacity-10 rounded-lg transform-style-preserve-3d transition-transform duration-300"
        style={{ transform: `rotateX(${tiltValues.posY}deg) rotateY(${tiltValues.posX}deg)` }}
      >
        <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}></div>
        <div className="relative z-10 p-4 text-white text-center">
          <h2>Your Text Here</h2>
          <p>Additional content...</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
