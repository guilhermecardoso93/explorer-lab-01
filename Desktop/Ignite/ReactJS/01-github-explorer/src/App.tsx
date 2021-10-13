import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Router from "./Router";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div id="principal">
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
