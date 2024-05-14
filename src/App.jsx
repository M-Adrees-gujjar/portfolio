import Header from "./component/Header/Header";
import DashBoard from "./component/DashBoard/DashBoard";
import Experience from "./component/Experience/Experience";
import Skill from "./component/Skills/Skill";
import SlideBar from "./component/SlideBar/SlideBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <DashBoard />
    <Experience />
    <Skill />
    <SlideBar />
    <Outlet />
    </>
  );
}

export default App;
