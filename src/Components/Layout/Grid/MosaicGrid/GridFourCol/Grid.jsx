import React, { useEffect, useState } from "react";
import InfoBox from "../../../../Features/InfoBox/InfoBox";
import { createClient } from "pexels";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useMedia } from "../../../../Context/MediaContext";
import { useAltText } from "../../../../Context/AltTextContext";
import { usePhotographer } from "../../../../Context/PhotographerContext";

function Grid({ info }) {
  const [photos, setPhotos] = useState([]);
  const client = createClient(
    "lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo"
  );
  const fetchPhotos = async () => {
    try {
      const response = await client.photos.search({ query: "Japan cities" });
      setPhotos(response.photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  const navigate = useNavigate();
  const { setSelectedMedia } = useMedia();
  const { setSelectedAlt } = useAltText();
  const { setSelectedPhotographer } = usePhotographer();

  const handleMediaClick = (photo) => {
    let mediaSrc;

    mediaSrc = photo.src?.portrait;

    let mediaAlt;

    mediaAlt = photo.alt;

    let mediaPhotographer;

    mediaPhotographer = photo.photographer;

    setSelectedMedia(mediaSrc);
    setSelectedAlt(mediaAlt);
    setSelectedPhotographer(mediaPhotographer);

    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product`);
  };

  return (
    <Link
      to={{
        pathname: "/product/",
      }}>
      <div className={styles.content}>
        {photos.map((photo, index) => {
          return index === 4 && info ? (
            <div
              key={`info-box-${index}`}
              className={styles[`image-${index + 1}`]}>
              <InfoBox />
            </div>
          ) : (
            <div className={styles[`image-${index + 1}`]} key={photo.id}>
              <img
                src={photo.src.portrait}
                alt={`Photo ${index}`}
                onClick={() => {
                  handleMediaClick(photo);
                }}
              />
            </div>
          );
        })}
      </div>
    </Link>
  );
}
export default Grid;
