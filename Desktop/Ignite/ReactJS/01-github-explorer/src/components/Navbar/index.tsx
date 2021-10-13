import { FaDragon, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.scss";

export default function NavBar() {
  return (
    
      <Navbar>
          <Nav className="navbar navbar-expand-md navbar-light bg-light">
            <Nav.Link href="#home">
              <Link to="/">
                <FaHome color="#e9ecf0" size="1.5em" className="icon3" />
              </Link>
            </Nav.Link>
            <FaDragon color="#00A8CC" size="1em" className="icon2" />
            <Nav.Link href="#aboutme">
              <Link to="/aboutme">
                <p>About Me</p>
              </Link>
            </Nav.Link>
            <FaDragon color="#00A8CC" size="1em" className="icon2" />
            <Nav.Link href="#curriculo">
              <Link to="/curriculo">
                <p>Currículo</p>
              </Link>
            </Nav.Link>
            <FaDragon color="#00A8CC" size="1em" className="icon2" />
            <Nav.Link href="#algunsprojetos">
              <Link to="/algunsprojetos">
                <p>Alguns Projetos</p>
              </Link>
            </Nav.Link>
            <FaDragon color="#00A8CC" size="1em" className="icon2" />
            <Nav.Link href="#contato">
              <Link to="/contato">
                <p>Contato</p>
              </Link>
            </Nav.Link>
          </Nav>
      </Navbar>
    
  );
  {/*
        <body className="simpleInfos">
          <nav>
            <ul>
              <FaChevronLeft color="#e9ecf0" size="1em" className="icon" />
              <FaChevronRight color="#e9ecf0" size="1em" className="icon2" />
            </ul>
          </nav>
        </body>
*/}
}


