import { useState, useEffect, useRef } from "react";

export default function TypeWriter({ phrases }) {
  //   const index = useRef(0);
  //   const [currentText, setCurrentText] = useState("");

  //   useEffect(() => {
  //     index.current = 0;
  //     setCurrentText("");
  //   }, [text]);

  //   useEffect(() => {
  //     const timeoutId = setTimeout(() => {
  //       setCurrentText((value) => value + text.charAt(index.current));
  //       console.log(currentText);
  //       index.current++;
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }, [currentText, text]);

  // >>> loop
  let phrasesElement = 0;
  let character = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  const [displayText, setDisplayText] = useState("");

  function loop() {
    isEnd = false;

    if (phrasesElement < phrases.length) {
      // as long the end of the element has NOT been reached
      if (!isDeleting && character <= phrases[phrasesElement].length) {
        currentPhrase.push(phrases[phrasesElement][character]);
        character++;
        setDisplayText(currentPhrase.join(""));
      }

      if (isDeleting && character <= phrases[phrasesElement].length) {
        currentPhrase.pop(phrases[phrasesElement][character]);
        character--;
        setDisplayText(currentPhrase.join(""));
      }

      //
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
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 500;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;

    setTimeout(loop, time);
  }
  // <<< loop
  useEffect(() => {
    loop();
  }, []);
  return (
    <main>
      <p>{displayText}|</p>
    </main>
  );
}
