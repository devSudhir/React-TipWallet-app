import style2 from "./Header.module.css";
import style3 from "./Main.module.css";
import { SubDiv } from "./SubDiv";
import style from "./Nav.module.css";
export function Main() {
  return (
    <div
      className={`${style3.setFlexDirColumn} ${style.displayFlex} ${style3.setPositionAbsolute} ${style2.fullScreen} `}
    >
      <img
        style={{ borderRadius: "100px" }}
        src={
          "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
        }
        alt="profile_image"
      />
      <div style={{ background: "#fff", width: "85%", marginBottom: "20px" }}>
        <h2>Sudo_Overflow</h2>
        <p>
          Hey there is my Tipwallets profile, thank you for supporting my work.
        </p>
      </div>
      <div>
        <SubDiv />
      </div>
    </div>
  );
}
