import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <p>
        <FaChevronLeft color="#e9ecf0" size="1em" className="iconFooter"/>
          Guilherme Cardoso 
        <FaChevronRight color="#e9ecf0" size="1em"className="iconFooter"/>
      </p>
    </footer>
  );
}
