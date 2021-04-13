import './MainContainer.scss';

import Image from "./image/Image";
import Containers from "./containers/Containers";
import Footer from "../footer/Footer";


const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="subMainContainer">
        <Image />
        <Containers />
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;