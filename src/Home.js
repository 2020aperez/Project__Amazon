import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1234589"
            title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling, Transparency, 22 Hours Of Listening Time - Light Blue"
            price={199.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51o0A9Bky4L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="1234589"
            title="Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD, easy set-up, released 2019"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1234589"
            title="iPhone Charger, Anker Powerline II Lightning Cable, [3ft Apple MFi Certified] USB Charging/Sync Lightning Cord Compatible with iPhone SE 11 11 Pro 11 Pro Max Xs MAX XR X 8 7 6S 6 5, iPad and More"
            price={8.49}
            image="https://images-na.ssl-images-amazon.com/images/I/61pQLK9UvlL._AC_SL1500_.jpg"
            rating={2}
          />
          <Product
            id="2345891"
            title="Reolink 4K 16CH PoE Security-Camera-System H.265, 8pcs 8MP PoE IP Security Cameras Outdoor, 16-Channel NVR 8MP with 3TB HDD, 24/7 Video Surveillance and Recording for Home and Business, RLK16-800B8"
            price={764.98}
            image="https://images-na.ssl-images-amazon.com/images/I/61u-4mRXKoL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="8234589"
            title="Video Camera Camcorder Full HD 1080P 36MP 30FPS Digital YouTube Vlogging Camera Video Recorder with Night Vision 3.0 Inch 270 Degree Rotation IPS Screen 16X Zoom Remote Control, 2 Batteries"
            price={58.64}
            image="https://images-na.ssl-images-amazon.com/images/I/716dpFvB%2BsL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="5234587"
            title="All-New Insignia NS-50DF710NA21 50-inch Smart 4K UHD - Fire TV Edition, Released 2020"
            price={269.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BOhM4LEUL._AC_SL1000_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
