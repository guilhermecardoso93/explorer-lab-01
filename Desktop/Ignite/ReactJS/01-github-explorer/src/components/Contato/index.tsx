import { Col, Form, Row, Button } from "react-bootstrap";
import { FaDog, FaCat } from "react-icons/fa";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaDragon,
} from "react-icons/fa";

import "./styles.scss";

export default function Contato() {
  return (
    <>
      <div className="contatoInfo">
        <div className="contatoInfo-titulo">
          <h2>
            <FaDragon color="#00A8CC" size="1em" className="icon2" />
            &nbsp;&nbsp;Contato&nbsp;&nbsp;
            <FaDragon color="#00A8CC" size="1em" className="icon2" />
          </h2>
        </div>
        <div className="contatoInfo-dados">
          <a
            href="https://www.instagram.com/guicardoso93"
            target="_blank"
            className="icon"
          >
            <FaInstagram color="#e9ecf0" size="1.4em" className="icon" />
          </a>
          <a
            href="https://github.com/GuilhermeCardoso93"
            target="_blank"
            className="icon"
          >
            <FaGithub color="#e9ecf0" size="1.4em" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-cardoso-35710b103"
            target="_blank"
            className="icon"
          >
            <FaLinkedin color="#e9ecf0" size="1.4em" className="icon" />
          </a>
          <br />
          <a
            href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
            target="_blank"
          >
            <FaWhatsapp color="#e9ecf0" size="1.4em" className="icon" />
          </a>
          +55 22 99904-7309 &nbsp;&nbsp;{" "}
          <FaPhoneAlt color="#e9ecf0" size="1em" className="icon" />
          +55 22 99904-7309
          <br />
          <a
            href="mailto:guilherme_cardosogui@hotmail.com"
            target="_blank"
            className="icon"
          >
            <FaRegEnvelope color="#e9ecf0" size="1.2em" />
          </a>
          <strong>e-mail:</strong>guilherme_cardosogui@hotmail.com
        </div>
      </div>
    </>
  );
}
