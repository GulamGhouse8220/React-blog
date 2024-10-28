import Header from "../../components/Header/Header";
import Postes from "../../components/Posts/Postes";
import Sidebars from "../../components/Sidebar/Sidebars";
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
