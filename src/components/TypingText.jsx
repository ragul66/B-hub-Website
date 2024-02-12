import React from "react";
import { ReactTyped } from "react-typed";

const TypingText = () => {
  return (
    <div>
      <h1 className="text-textcolor-0">
        Welcome to{" "}
        <ReactTyped
          strings={["My React App"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
      </h1>
    </div>
  );
};

export default TypingText;
