import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "With my extensive knowledge and proficiency in Unity, I am confident in my ability to tackle any development challenge and contribute to the success of any projects.",
          // "Game Developer",
          // "Website Developer",
          // "Mobile Game Developer",
          // "App Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
