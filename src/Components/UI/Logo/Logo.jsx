import styles from "./style.module.scss";

function Logo({ color }) {
  return (
    <p className={styles.logo} style={{ color }}>
      JapanStock
    </p>
  );
}

export default Logo;
