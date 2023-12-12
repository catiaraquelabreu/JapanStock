import styles from "./styles.module.scss";

export default async function fetchImages(props) {
  const photoID = props.photoID;
  const APIkey = "ilipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo";
  const query = "Japan cities";

  const imageRequest = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
    {
      headers: {
        Authorization: APIkey,
      },
    }
  ).then((response) => response.json());

  const photos = [...imageRequest.photos].map((image) => ({
    author: image.photographer,
    url: image.src.large,
    id: crypto.randomUUID(),
  }));

  return (
    <div>
      <div className={styles.content}>
        {photos.slice(0, 1).map((photo, index) => (
          <div className={styles[{ photoID }]} key={photo.id}>
            <img src={photo.src.original} alt={`Photo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
