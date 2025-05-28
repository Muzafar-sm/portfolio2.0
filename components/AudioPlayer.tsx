'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const audio = audioRef.current;
    if (!audio) return;

    // Try muted autoplay to avoid browser restrictions
    audio.muted = true;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.warn('Muted autoplay failed:', err);
    });

    // Wait for user interaction to unmute audio
    const handleUserGesture = () => {
      audio.muted = false;
      window.removeEventListener('click', handleUserGesture);
    };

    window.addEventListener('click', handleUserGesture);
    return () => window.removeEventListener('click', handleUserGesture);
  }, [hasMounted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  if (!hasMounted) return null; // Avoid hydration mismatch

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop src="/music/background.mp3" />
      <button
        onClick={togglePlay}
        className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  );
}
