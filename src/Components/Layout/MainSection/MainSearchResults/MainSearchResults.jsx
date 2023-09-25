import React from "react";
import { useLocation } from "react-router-dom";
import NormalGrid from "../../Grid/NormalGrid/NormalGrid";
import styles from "./styles.module.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Btn from "../../../UI/Button/Btn";
import "leaflet/dist/leaflet.css";
import rightChevron from "/assets/right-chevron.svg";
import leftChevron from "/assets/left-chevron.svg";

function MainSearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");
  const category = queryParams.get("category");

  return (
    <div className={styles.div}>
      <div className={styles.grid}>
        <NormalGrid searchQuery={searchQuery} category={category} />
        {/* <div className={styles.buttonsGrid}>
          <Btn
            content={
              <div>
                <img src={leftChevron} alt="Left Chevron" />
              </div>
            }
          />
          <Btn
            content={
              <div>
                <img src={rightChevron} alt="Right Chevron" />
              </div>
            }
          />
        </div> */}
      </div>
      <div className={styles.map}>
        {" "}
        <MapContainer
          center={[35.68321, 139.8089]}
          zoom={13}
          style={{ width: "490px", height: "1200px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[35.68321, 139.8089]}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MainSearchResults;
