import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import "./Stars.css";

const Star = ({ size, delay, left, top }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`star ${theme}`}
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        delay: delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = window.innerWidth < 768 ? 15 : 25;

    const generateStars = () => {
      const newStars = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 5 + 2 + "px",
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 2,
        });
      }

      setStars(newStars);
    };

    generateStars();

    window.addEventListener("resize", generateStars);

    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <Star
          key={star.id}
          size={star.size}
          delay={star.delay}
          left={star.left}
          top={star.top}
        />
      ))}
    </div>
  );
};

export default Stars;
