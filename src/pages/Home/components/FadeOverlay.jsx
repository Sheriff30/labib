import React, { useRef, useEffect, useState } from "react";

export default function FadeOverlay() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute top-0 left-0 w-full h-full bg-orange transition-opacity duration-[3000ms] pointer-events-none ${
        visible ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}
