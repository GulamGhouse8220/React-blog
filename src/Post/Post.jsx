import "./post.css";
import Down2 from "../Img/down2.jpg";

export default function Post() {
  return (
    <div className="post">
      <img src={Down2} width={300} alt="" className="PostImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor.</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe ad minima nulla? Nemo laboriosam asperiores praesentium architecto velit debitis culpa dicta inventore, repellendus possimus expedita eum ratione obcaecati ducimus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe ad minima nulla? Nemo laboriosam asperiores praesentium architecto velit debitis culpa dicta inventore, repellendus possimus expedita eum ratione obcaecati ducimus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe ad minima nulla? Nemo laboriosam asperiores praesentium architecto velit debitis culpa dicta inventore, repellendus possimus expedita eum ratione obcaecati ducimus!
      </p>
    </div>
  );
}
