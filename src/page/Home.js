import './Home.css';

import plusSymbol from "../assets/plusSymbol.svg";
import planeIcon from "../assets/planeIcon.svg";
import discover from "../assets/discover.svg";
import travellersIcon from "../assets/travellersIcon.svg";
import likes from "../assets/likes.svg";

function Home() {
  return (
    <div className="container-home">
      <section className="first-section card"></section>

      <div className="middle-body">

        <section className="second-section">
          <h2>Your Plans</h2>
          <div className="sub-second card">
            <img src={plusSymbol} alt="Plus symbol"></img>
          </div>
        </section>

        <section className="tird-section card"></section>

        <section className="fourth-section card"></section>

        <section className="fifth-section card">

        </section>

      </div>

      <footer>
        <img src={planeIcon} alt="Icon of a plane" />
        <img src={discover} alt="Compass" />
        <img src={travellersIcon} alt="Icons of a user" />
        <img src={likes} alt="A like" />
      </footer>

    </div>
  );
}

export default Home;
