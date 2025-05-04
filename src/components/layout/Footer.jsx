import { FaHeart, FaStar } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} TodoStar. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> and{" "}
            <FaStar className="star-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
