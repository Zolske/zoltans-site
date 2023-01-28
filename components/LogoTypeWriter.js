import React, { useEffect } from "react";

export default function LogoTypeWriter({}) {
  const textDisplay = document.getElementById("logoTypeWriter");
  // const phrases = ['Hello, my name is Ania.', 'I love to code.', 'I love to teach.']
  const phrases = [
    "< ZOLTAN / KEPES >",
    // "Welcome to my Website!",
    // "Please, have a look around.",
  ];
  let phrasesElement = 0;
  let character = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
    isEnd = false;
    // textDisplay.innerHTML = currentPhrase.join("");
    const ref = React.useRef(null);

    if (phrasesElement < phrases.length) {
      if (!isDeleting && character <= phrases[phrasesElement].length) {
        currentPhrase.push(phrases[phrasesElement][character]);
        character++;
        textDisplay.innerHTML = currentPhrase.join("");
      }

      if (isDeleting && character <= phrases[phrasesElement].length) {
        currentPhrase.pop(phrases[phrasesElement][character]);
        character--;
        textDisplay.innerHTML = currentPhrase.join("");
      }

      if (character == phrases[phrasesElement].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && character === 0) {
        currentPhrase = [];
        isDeleting = false;
        phrasesElement++;
        if (phrasesElement === phrases.length) {
          phrasesElement = 0;
        }
      }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 4000 : isDeleting ? spedUp : normalSpeed;

    setTimeout(loop, time);
  }

  loop();
  return (
    <main>
      {/* <span id="logoTypeWriter"></span> */}
      <div ref={ref}></div>;
    </main>
  );
}
