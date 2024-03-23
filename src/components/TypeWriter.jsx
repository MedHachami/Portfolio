
import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Back End Developer",
          "Software Engineer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      style={{ fontSize: '28px' }} 

    />
  );
}

export default TypeWriter;
