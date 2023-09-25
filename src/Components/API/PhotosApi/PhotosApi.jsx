import React, { useEffect, useState } from "react";
import { createClient } from 'pexels';
import styles from "./styles.module.scss";

function PhotosApi(props) {

    const photoID = props.photoID

    const [photos, setPhotos] = useState([]);

    const client = createClient('lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo');

    const fetchPhotos = async () => {
    try {
        const response = await client.photos.search({ query: 'Japan cities' });
        setPhotos(response.photos);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
    };

    useEffect(() => {
        fetchPhotos();
      }, []);

    return (
        <div>
            <div className={styles.content}>
            {photos.slice(0, 1).map((photo, index) => (
            <div className={styles[{photoID}]} key={photo.id}>
              <img src={photo.src.original} alt={`Photo ${index}`} />
            </div>
            ))}
            </div>
        </div>
    )
}

export default PhotosApi