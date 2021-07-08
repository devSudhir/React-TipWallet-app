import style1 from "./Header.module.css";
export function Header() {
  console.log("hi");
  return (
    <div
      className={`${style1.setPositionRelative} ${style1.attachBackImage} ${style1.fullScreen}`}
    >
      <img
        className={`${style1.fullScreen}`}
        src={
          "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
        }
        alt="back_image"
      />
    </div>
  );
}
