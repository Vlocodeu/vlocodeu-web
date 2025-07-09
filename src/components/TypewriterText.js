"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const TypewriterText = ({ typingSpeed = 70, pauseTime = 2000 }) => {
  const { t } = useLanguage();

  const texts = t.heroTypewriterTexts || [];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[textIndex];
    const currentLength = displayedText.length;
    const isDoneTyping = currentLength === currentText.length;

    let timeout;

    if (!isDeleting && !isDoneTyping) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentLength + 1));
      }, typingSpeed);
    } else if (isDoneTyping && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting) {
      if (currentLength > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, currentLength - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, pauseTime]);

  return <span className="text-purple-400">{displayedText}|</span>;
};

export default TypewriterText;
