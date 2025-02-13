import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GSAPGradient() {
  const gradientRef = useRef(null);

  useEffect(() => {
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% 50%",
      duration: 6,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={gradientRef}
      className="w-screen h-screen bg-gradient-to-r from-pink-300 via-blue-500 to-fuchsia-700 bg- bg-[length:300%_300%]"
    />
  );
}
