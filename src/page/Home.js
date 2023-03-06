import './home.css';
import './respo.css';

import travelPlane from "../assets/travel.svg";
import plusSymbol from "../assets/plusSymbol.svg";

import photo from "../assets/photoSushi.svg";
import editButton from "../assets/editButton.svg";

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
      <section className="first-section card">
        <h1 className="first-title">Let’s get <br /> you there…</h1>
        <div className="boardingPass">
          <div className="top-info">
            <p className="top-info-first">BOARDING NOW</p>
            <p className="top-info-second">GATE CLOSES AT 10.00</p>
          </div>
          <div className="boardingPass-body">
            <div className="boardingPass-second">

              <div className="boardingPass-city">
                <h1>LHR</h1>
                <span>London, England</span>
              </div>

              <div className="boardingPass-img">
                <div className="boardingPass-img-line"></div>
                <img src={travelPlane} alt="Icon of plane" />
                <div className="boardingPass-img-line"></div>
              </div>

              <div className="boardingPass-city">
                <h1>JFK</h1>
                <span>New York City, USA</span>
              </div>
            </div>
            <div className="boardingPass-tird">
              <div className="boardingPass-tird-info">
                <div className="boardingPass-tird-titles">
                  <h4>FLIGHT</h4>
                  <h3>VA2501</h3>
                </div>
                <div className="boardingPass-tird-titles">
                  <h4>SEAT</h4>
                  <h3>35a</h3>
                </div>
                <div className="boardingPass-tird-titles">
                  <h4>GATE</h4>
                  <h3>34B</h3>
                </div>
              </div>

              <div className="boardingPass-tird-info">
                <div className="boardingPass-tird-titles">
                  <h4>DEPARTS</h4>
                  <h3>10.25</h3>
                </div>
                <button>VIEW BOARDING PASS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

              <div className="route-area">
                <div className="route-first">
                  <div className="circle">
                    <div className="circle-pickup"></div>
                  </div>
                  <div>
                    <h2>Pickup</h2>
                    <p>John F. Kennedy International Airport</p>
                  </div>
                </div>
                <button>
                  <img src={editButton} alt="Edit button" />
                </button>
              </div>

              <div className="vertical-line"></div>

              <div className="route-area">
                <div className="route-first">
                  <div className="circle">
                    <div className="circle-destination"></div>
                  </div>
                  <div>
                    <h2>Destination</h2>
                    <p>36 W 38th Street New York, NY 10018</p>
                  </div>
                </div>
                <button>
                  <img src={editButton} alt="Edit button" />
                </button>
              </div>

            </div>
          </div>
        </section>

        <section className="fourth-section card"></section>

        <section className="fifth-section">

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
