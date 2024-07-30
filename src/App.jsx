import Header from "./component/Header/Header";
import Experience from "./component/Experience/Experience";
import DashBoard from "./component/DashBoard/DashBoard";
import Skill from "./component/Skills/Skill";
import SlideBar from "./component/SlideBar/SlideBar";
import Footer from "./component/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <DashBoard />
      <Experience />
      <Skill />
      <SlideBar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
