import Header from "../../Header/Header";
import Postes from "../../Posts/Postes";
import Sidebars from "../../Sidebar/Sidebars";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="Home">
        <Postes />
        <Sidebars />
      </div>
    </>
  );
}
