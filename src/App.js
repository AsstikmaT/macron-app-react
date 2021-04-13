import './App.scss';

import Navbar from "./components/navbar/Navbar";
import MainContainer from "./components/mainContainer/MainContainer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
