import React from "react";

const MovingText = () => {
  return (
    <div className="w-full h-10 overflow-hidden">
      <div className="animate-marquee">
        <p className="inline-block whitespace-nowrap">
          This text is moving across the screen!
        </p>
      </div>
    </div>
  );
};

export default MovingText;
