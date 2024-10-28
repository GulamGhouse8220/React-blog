import "./Header.css"
import img1 from "../../Img/pexels-pixabay-60628.jpg"

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
