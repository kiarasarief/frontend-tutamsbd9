import { motion } from "framer-motion";
import { FaStar, FaGithub } from "react-icons/fa";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="container about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-header">
          <h1 className="about-title">About TodoStar</h1>
          <div className="stars-decoration">
            <FaStar className="star-icon small" />
            <FaStar className="star-icon medium" />
            <FaStar className="star-icon large" />
            <FaStar className="star-icon medium" />
            <FaStar className="star-icon small" />
          </div>
        </div>

        <div className="about-card">
          <h2>Welcome to TodoStar!</h2>
          <p>
            TodoStar is a beautiful and intuitive todo list application designed
            to help you organize your tasks with style. Built with React.js for
            the frontend and Express.js for the backend, TodoStar provides a
            seamless and responsive user experience.
          </p>

          <h3>Features</h3>
          <ul className="features-list">
            <li>Create, read, and delete todo items</li>
            <li>Responsive design for all devices</li>
            <li>Beautiful dark and light mode</li>
            <li>Smooth animations and transitions</li>
            <li>MongoDB database for data persistence</li>
          </ul>

          <h3>Technologies Used</h3>
          <ul className="tech-list">
            <li>React.js (Frontend)</li>
            <li>Express.js (Backend)</li>
            <li>MongoDB (Database)</li>
            <li>Framer Motion (Animations)</li>
            <li>React Router (Navigation)</li>
          </ul>

          <div className="github-link">
            <a
              href="https://github.com/yourusername/todostar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
