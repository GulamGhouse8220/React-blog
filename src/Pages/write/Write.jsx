import "./write.css";
import img1 from "../../Img/images.jpg";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={img1} alt="" />
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
        </label>
        <input type="file" id="fileInput" style={{ display: "none" }} />
        <input
          type="text"
          placeholder="Title"
          className="writeInput"
          autoFocus={true}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          placeholder="Tell your story.."
          type="text"
          className="writeInput writeText"
        ></textarea>
      </div>
      <button className="writeSubmit">Publishe</button>
    </div>
  );
}