import './Home.css';

import plusSymbol from "../assets/plusSymbol.svg";

import photo from "../assets/photoSushi.svg";

import taxiIcon from "../assets/taxi.svg";
import subwayIcon from "../assets/subway.svg";
import uberIcon from "../assets/uber.svg";
import uberIcon2 from "../assets/uber2.svg";

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

        <section className="tird-section card">
          <div className="body-reminders">
            <div className="driver-info">
              <img src={photo} alt="The driver" />
              <p>
                Ryan from Corey Car Services is confirmed for pickup at
                <span style={{ color: '#8BC34A' }}> 15.40</span>.
              </p>
            </div>

            <div className="route">
              <div className="pickup-area">
                <div className="circle">
                  <div className="circle-pickup"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fourth-section card"></section>

        <section className="fifth-section card">

          <div className="destinations-inputs">
            <input placeholder="From" />
            <input placeholder="To" />
          </div>

          <div className="transportations">
            <img src={taxiIcon} alt="Icon of a taxi" />
            <img src={subwayIcon} alt="Icon of a subway" />
            <img src={uberIcon} alt="Icon of a uber" />
            <img src={uberIcon2} alt="Icon of a uber" />
          </div>

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
