'use client'

import { useEffect, useRef } from 'react';
import party from 'party-js';

export default function Home() {
  const textRef = useRef();

  let color1 = new party.Color(255, 0, 0);  // red
  let color2 = new party.Color(0, 255, 0);  // green
  let color3 = new party.Color(0, 0, 255);  // blue

  let gradient = party.Gradient.simple(color1, color2, color3);

  useEffect(() => {
    const interval = setInterval(() => {
      if (textRef.current) {
        party.sparkles(textRef.current, { color: party.variation.gradientSample(gradient), count: 10 });
      }
    }, 1000); // This will create a sparkle effect every 1 second

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-center items-center">
      <h1 className="text-4xl" ref={textRef}>I Support You.</h1>
    </main>
  )
}
