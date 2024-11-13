import "./Header.css"
import img1 from "../../Img/Gulam-jpg.jpg"

export default function Header() {
    return (
        <div className='Header'>
            <div className="headerTitles">
                <span className="headerTitleSm"> React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={img1} alt="image" />
        </div>
    )
}
