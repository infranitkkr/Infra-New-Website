import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logo3 from '../images/logo3.png'


const getRotationTransition = (duration, from, loop = true) => ({
    from: from,
    to: from + 360,
    ease: "linear",
    duration: duration,
    type: "tween",
    repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
    rotate: getRotationTransition(duration, from),
    scale: {
        type: "spring",
        damping: 20,
        stiffness: 300,
    },
});

const CircularText = ({
    text,
    spinDuration = 20,
    onHover = "speedUp",
    className = "",
}) => {
    const letters = Array.from(text);
    const controls = useAnimation();
    const [currentRotation, setCurrentRotation] = useState(0);

    useEffect(() => {
        controls.start({
            rotate: currentRotation + 360,
            scale: 1,
            transition: getTransition(spinDuration, currentRotation),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spinDuration, controls, onHover, text]);

    const handleHoverStart = () => {
        if (!onHover) return;
        switch (onHover) {
            case "slowDown":
                controls.start({
                    rotate: currentRotation + 360,
                    scale: 1,
                    transition: getTransition(spinDuration * 2, currentRotation),
                });
                break;
            case "speedUp":
                controls.start({
                    rotate: currentRotation + 360,
                    scale: 1,
                    transition: getTransition(spinDuration / 4, currentRotation),
                });
                break;
            case "pause":
                controls.start({
                    rotate: currentRotation,
                    scale: 1,
                    transition: {
                        rotate: { type: "spring", damping: 20, stiffness: 300 },
                        scale: { type: "spring", damping: 20, stiffness: 300 },
                    },
                });
                break;
            case "goBonkers":
                controls.start({
                    rotate: currentRotation + 360,
                    scale: 0.8,
                    transition: getTransition(spinDuration / 20, currentRotation),
                });
                break;
            default:
                break;
        }
    };

    const handleHoverEnd = () => {
        controls.start({
            rotate: currentRotation + 360,
            scale: 1,
            transition: getTransition(spinDuration, currentRotation),
        });
    };

    return (
        <div className="flex items-center justify-center h-screen relative">
            <motion.div
                initial={{ rotate: 0 }}
                className={`absolute rounded-full sm:w-[200px] sm:h-[400px] w-[200px] h-[280px] text-white font-black text-center cursor-pointer ${className}`}
                animate={controls}
                onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
                style={{ zIndex: 10 }} // Ensure motion.div is on top
            >
                {letters.map((letter, i) => {
                    const rotation = (360 / letters.length) * i;
                    const factor = Number((Math.PI / letters.length).toFixed(0));
                    const x = factor * i;
                    const y = factor * i;
                    const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

                    return (
                        <span
                            key={i}
                            className="absolute inline-block text-black inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
                            style={{ transform, WebkitTransform: transform }}
                        >
                            {letter}
                        </span>
                    );
                })}
            </motion.div>
            <img src={logo3} className="w-[40vw] sm:w-[20vw]" alt="logo" style={{ zIndex: 1 }} /> {/* Ensure img is below motion.div */}
        </div>
    );
};

export default CircularText;
