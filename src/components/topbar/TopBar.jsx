import "./TopBar.css"
import img from "../../Img/Gulam-Png.png"

export default function topbar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-f"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-github"></i>
                <i className="topIcon fa-brands fa-whatsapp"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>

                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src={img} width="100%" alt="react img" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
