import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useMedia } from "../../../../Context/MediaContext";
import { useAltText } from "../../../../Context/AltTextContext";
import { usePhotographer } from "../../../../Context/PhotographerContext";

function GridTwoCol({ info }) {
  const [photos, setPhotos] = useState([]);
  const client = createClient(
    "lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo"
  );
  const fetchPhotos = async () => {
    try {
      const response = await client.photos.search({ query: "Japan city" }); //conforme o que pesquisar diferentes cidades
      setPhotos(response.photos.slice(0, 8));
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

    console.log("mediaPhotographer:", mediaPhotographer);

    setSelectedMedia(mediaSrc);
    setSelectedAlt(mediaAlt);
    setSelectedPhotographer(mediaPhotographer);

    console.log(mediaPhotographer);

    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product`);
  };

  return (
    <Link
      to={{
        pathname: "/product/",
      }}>
      <div className={styles.contentGrid}>
        {photos.map((photo, index) => {
          return (
            <div className={styles[`image-${index + 1}`]} key={photo.id}>
              <img
                src={photo.src.landscape}
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
export default GridTwoCol;
