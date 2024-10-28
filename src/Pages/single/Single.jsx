import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebars";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
