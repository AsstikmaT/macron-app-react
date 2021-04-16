import './MainContainer.scss';

import Image from "./image/Image";
import Containers from "./containers/Containers";
import Footer from "../footer/Footer";


const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="subMainContainerResponsive">
        <Image />
        <Containers />
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;