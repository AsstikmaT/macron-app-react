import "./Image.scss";
import funnyMacron from "./funnyMacron.png";

const Image = () => {
  return (
    <div className="containerImage">
      <img className="image" alt="macron" src={funnyMacron}/>
    </div>
  );
}

export default Image;