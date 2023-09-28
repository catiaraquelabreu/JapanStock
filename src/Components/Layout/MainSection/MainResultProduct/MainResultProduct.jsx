import Btn from "../../../UI/Button/Btn";
import Mastercard from "/assets/mastercard.jpg";
import Visa from "/assets/visa.png";
import AmericanExp from "/assets/americansExpress.png";
import Paypal from "/assets/PayPal.png";
import Shop from "/assets/imgShop.jpg";
import GridTwoCol from "../../Grid/MosaicGrid/GridTwoCol/Grid";
import styles from "./styles.module.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMedia } from "../../../Context/MediaContext";
import LicenseOptions from "../../../UI/Options/Options";
import { useAltText } from "../../../Context/AltTextContext";
import { usePhotographer } from "../../../Context/PhotographerContext";
import { useState } from "react";

function MainResultProduct() {
  const { selectedMediaSrc } = useMedia();
  const { selectedAltText } = useAltText();
  const { selectedPhotographerText } = usePhotographer();

  console.log("srcis:", selectedMediaSrc);
  console.log("phtgrphr is:", selectedPhotographerText);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.results}>
        <div onClick={openPopup}>
          {selectedMediaSrc &&
            (selectedMediaSrc.includes(".mp4") ? (
              <video controls width="100%" height="auto">
                <source src={selectedMediaSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={decodeURIComponent(selectedMediaSrc)}
                alt="Selected Media"
                className={styles.mainResultImage}
              />
            ))}
        </div>
        {isPopupOpen && (
          <div className={styles.overlay} onClick={closePopup}>
            <div className={styles.popup}>
              <span className={styles.closeButton} onClick={closePopup}>
                &times;
              </span>
              <img
                src={decodeURIComponent(selectedMediaSrc)}
                alt="Selected Media"
              />
            </div>
          </div>
        )}
        <p>
          Japan, a land where time seems to blend harmoniously with nature,
          unveils a tapestry of breathtaking landscapes and captivating
          cityscapes. Amidst the modernity, Japan's appreciation for simplicity
          and mindfulness can be witnessed in the Zen gardens and the meditative
          art of calligraphy. From the serene countryside to the bustling
          metropolises, this country weaves together a symphony of beauty that
          enchants all who wander through its captivating vistas. It is a
          tapestry woven with threads of beauty, where ancient traditions
          coexist with cutting-edge technology. Whether wandering through the
          serene landscapes or exploring the vibrant cities, Japan enthralls the
          senses, leaving an indelible mark on the heart of every traveler
          fortunate enough to behold its splendor.
        </p>

        <div className={styles.gridContainer}>
          <h2>Your might also like:</h2>
          <GridTwoCol />
        </div>
      </div>
      <div className={styles.purchase}>
        <MapContainer
          className={styles.map}
          center={[35.68321, 139.8089]}
          zoom={13}
          style={{
            width: "444px",
            height: "228px",
            alignSelf: "center",
          }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[35.68321, 139.8089]}></Marker>
        </MapContainer>
        <div className={styles.box}>
          <div className={styles.info}>
            <img src={Shop}></img>
            <p>{selectedAltText || "Stunning Japanese Video"}</p>
          </div>
          <p>{`Photographer : ${
            selectedPhotographerText || "Creator with no ID"
          }`}</p>
          <LicenseOptions />
          <Btn height={"48px"} content="Purchase" />
          <p>
            Product is licenced for a single or multiple usage. For more
            information, see our licence details.
          </p>
          <div className={styles.cards}>
            <img src={Mastercard}></img>
            <img src={Visa}></img>
            <img src={AmericanExp}></img>
            <img src={Paypal}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainResultProduct;
