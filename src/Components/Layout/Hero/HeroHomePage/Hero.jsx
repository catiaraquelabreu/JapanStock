import styles from "./style.module.scss";
import SearchBar from "../../../UI/SearchBar/SearchBar";

function Hero() {
  return (
    <div className={styles.div}>
      <div className={styles.titles}>
        <h1>Beautiful aerial stock photography and video</h1>
        <p className={styles.text}>
          Royalty free photos and videos from all locations of Japan.
        </p>
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
