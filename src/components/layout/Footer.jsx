import { FaHeart, FaStar } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} StarNote. By Putri Kiara Salsabila Arief
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" />
          </p>
          <p className="copyright2">
            Tugas Tambahan Praktikum Sistem Basis Data Modul 9
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
