import { FaDog, FaCat } from "react-icons/fa";
import NavBar from "../Navbar";

import "./styles.scss";

export default function AboutME() {
  return (
    <>
      <div className="aboutme">
        <div className="about">
          <h2>About Me!</h2>
        </div>
        <div className="me">
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp; Oi!!! Meu nome é Guilherme. Pai do Dragão e do Kook. Depois mais de
            10 anos na mesma empresa, 8 Anos no mesmo cargo eu resolvi busca
            algo novo, sair da rotina e buscar um nota caminho. Por meio da
            Programação eu estou buscando por novas oportunidades, por uma
            profissão, crescimento profissional e pessoal, conhecer novas
            pessoas e novos conteúdos e fazer parte da grande comunidade DEV. E
            uma área que me chamou muita atenção é a parte de Front-End, venho
            desde do começo do ano de 2021 estudando Programação, por diversão
            cursos como da RocketSeat, Alura, CursoemVideo e participando de
            eventos como NLW e ImersãoDev. <br/> &nbsp;&nbsp;&nbsp; E é um caminho sem volta para mim,
            estou indo de cabeça nessa área, cada dia aprendendo mais e mais,
            esta sendo muito satisfatório cada dia. Estou focando em ReactJS
            atualmente, e é so o começo.
          </p>
        </div>
      </div>
      <div className="footerMe">
        <FaCat className="footerMeIcon"/> <FaDog className="footerMeIcon"/>
      </div>
    </>
  );
}
