import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useMedia } from "../../../Context/MediaContext";
import { useAltText } from "../../../Context/AltTextContext";
const usePexelsClient = () => {
  const client = createClient(
    "lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo"
  );
  return client;
};

// ANTIGO FUNCIONNAL

const usePexelsPhotos = (searchQuery, category) => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const client = usePexelsClient();

  const fetchMedia = async () => {
    try {
      let photosResponse, videosResponse;

      if (category === "All") {
        photosResponse = await client.photos.search({
          query: searchQuery,
          per_page: 4,
        });
        videosResponse = await client.videos.search({
          query: searchQuery,
          per_page: 4,
          orientation: "landscape",
        });
      } else if (category === "Photos") {
        photosResponse = await client.photos.search({
          query: searchQuery,
          media_type: "photo",
          orientation: "landscape",
          per_page: 8,
        });
      } else if (category === "Videos") {
        videosResponse = await client.videos.search({
          query: searchQuery,
          per_page: 8,
          orientation: "landscape",
        });
      }

      if (photosResponse) {
        const photos = photosResponse.photos.map((photo) => ({
          ...photo,
          type: "photo",
        }));
        setPhotos(photos);
      }

      if (videosResponse) {
        const videos = videosResponse.videos.map((video) => ({
          ...video,
          type: "video",
        }));
        setVideos(videos);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [searchQuery, category]);

  return { photos, videos };
};

function NormalGrid({ searchQuery, category }) {
  const { photos, videos } = usePexelsPhotos(searchQuery, category);
  const media = [...photos, ...videos];

  const navigate = useNavigate();
  const { setSelectedMedia } = useMedia();
  const { setSelectedAlt } = useAltText();

  const handleMediaClick = (item) => {
    let mediaSrc;

    if (item.type === "video" && item.video_files?.length > 0) {
      mediaSrc = item.video_files[0].link;
    } else {
      mediaSrc = item.src?.landscape;
    }

    let mediaAlt;

    if (item.type === "video" && item.video_files?.length > 0) {
      mediaAlt = item.alt;
    } else {
      mediaAlt = item.alt;
    }

    setSelectedMedia(mediaSrc);
    setSelectedAlt(mediaAlt);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product`);
  };

  const handleMediaAlt = (item) => {
    let mediaAlt;

    if (item.type === "video" && item.video_files?.length > 0) {
      mediaAlt = item.alt;
    } else {
      mediaAlt = item.alt;
    }

    setSelectedAlt(mediaAlt);
  };

  return (
    <Link
      to={{
        pathname: "/product/",
      }}>
      <div className={styles.contentGrid}>
        {media.map((item, index) => {
          const gridItemClassName =
            item.type === "video"
              ? styles[`video-${index + 1}`]
              : styles[`image-${index + 1}`];

          return (
            <div
              key={item.id}
              className={gridItemClassName}
              onClick={() => {
                handleMediaClick(item);
                handleMediaAlt(item);
              }}
              style={{ cursor: "pointer" }}>
              {item.type === "video" ? (
                <video controls>
                  <source src={item.video_files?.[1]?.link} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.src?.landscape} alt={item.alt} />
              )}
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default NormalGrid;
