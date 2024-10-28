import "./Sidebarees.css";
import img1 from "../../Img/download1.jpg";
export default function Sidebars() {
  return (
    <div className="sidebars">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={img1} alt="google Images" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem repellat aliquid excepturi.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movies</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-f"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
}
