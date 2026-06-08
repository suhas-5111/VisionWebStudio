import { useState, useEffect, useRef } from 'react';

const PHRASES = [
  'Web Design.',
  'Business Websites.',
  'Landing Pages.',
  'Modern Brand Experiences.',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export function useTypewriter() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentPhrase = PHRASES[phraseIndex.current];

      if (!isDeleting) {
        // Typing
        charIndex.current += 1;
        setDisplayText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === currentPhrase.length) {
          // Done typing — pause then delete
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, PAUSE_AFTER_TYPE);
          return;
        }
        timeout = setTimeout(tick, TYPING_SPEED);
      } else {
        // Deleting
        charIndex.current -= 1;
        setDisplayText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          // Done deleting — move to next phrase
          setIsDeleting(false);
          phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
          timeout = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
        timeout = setTimeout(tick, DELETING_SPEED);
      }
    };

    timeout = setTimeout(tick, TYPING_SPEED);
    return () => clearTimeout(timeout);
  }, [isDeleting]);

  return displayText;
}
