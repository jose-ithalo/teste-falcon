import './Home.css';

import plusSymbol from "../assets/plusSymbol.svg";

function Home() {
  return (
    <div className="container-home">
      <div className="first-section"></div>

      <div className="second-section">
        <h2>Your Plans</h2>
        <div className="sub-second">
          <img src={plusSymbol} alt="Plus symbol"></img>
        </div>

      </div>
    </div>
  );
}

export default Home;
