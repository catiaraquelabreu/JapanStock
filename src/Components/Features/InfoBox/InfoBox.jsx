import styles from "./styles.module.scss";
import Btn from "../../UI/Button/Btn";

function InfoBox() {
  return (
    <div className={styles.info}>
      <div>
        <h3>Want to submit a photo?</h3>
        <p>We are always looking for talented photographers to join us.</p>
        <Btn height={"48px"} content="Learn More" />
      </div>
    </div>
  );
}

export default InfoBox;
