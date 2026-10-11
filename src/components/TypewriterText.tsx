"use client";
import { useEffect, useState } from "react";

const phrases = [
  "Scalable Web Apps",
  "Full Stack Solutions",
  "Modern REST APIs",
  "Robust Backend Systems",
  "React Experiences",
  "High-Performance Apps",
];

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 70);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), 40);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [charIndex, deleting, phraseIndex]);

  useEffect(() => {
    setDisplayed(phrases[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex]);

  return (
    <span className="accent-text typewriter-text">
      {displayed}
      <span className="cursor">|</span>
    </span>
  );
}
