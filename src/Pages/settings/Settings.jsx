import "./settings.css"
import Sidebars from "../../components/Sidebar/Sidebars"
import Img1 from "../../Img/Gulam-jpg.jpg"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={Img1} alt="Profile Picture" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user-tie"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Gulam"/>
          <label>Email</label>
          <input type="email" placeholder="Gulam@gmail.com"/>
          <label>Password</label>
          <input type="password" placeholder="********"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebars/>
    </div>
  )
}
