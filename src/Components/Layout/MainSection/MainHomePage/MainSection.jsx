import Grid from "../../Grid/MosaicGrid/GridFourCol/Grid";
import SearchBar from "../../../UI/SearchBar/SearchBar";
import styles from "./styles.module.scss";

function MainSection() {
  return (
    <div className={styles.div}>
      <Grid info={true} />
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <h2>Looking for more something specific?</h2>
          <div className={styles.searchContainer}>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
