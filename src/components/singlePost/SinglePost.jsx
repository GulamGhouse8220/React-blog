import "./singlePost.css";
import Down3 from "../../Img/download.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={Down3} width="100%" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <div className="singlePostAuthor">Author: <b>Gulam</b></div>
            <div className="singlePostDate">1 Hour ago</div>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum commodi cupiditate optio aspernatur labore nostrum voluptatibus deleniti, quod culpa! Expedita minus placeat illo beatae at exercitationem corrupti eveniet iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum commodi cupiditate optio aspernatur labore nostrum voluptatibus deleniti, quod culpa! Expedita minus placeat illo beatae at exercitationem corrupti eveniet iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum commodi cupiditate optio aspernatur labore nostrum voluptatibus deleniti, quod culpa! Expedita minus placeat illo beatae at exercitationem corrupti eveniet iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum commodi cupiditate optio aspernatur labore nostrum voluptatibus deleniti, quod culpa! Expedita minus placeat illo beatae at exercitationem corrupti eveniet iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum commodi cupiditate optio aspernatur labore nostrum voluptatibus deleniti, quod culpa! Expedita minus placeat illo beatae at exercitationem corrupti eveniet iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum commodi cupiditate optio aspernatur labore nostrum voluptatibus deleniti, quod culpa! Expedita minus placeat illo beatae at exercitationem corrupti eveniet iure?
        </p>
      </div>
    </div>
  );
}
