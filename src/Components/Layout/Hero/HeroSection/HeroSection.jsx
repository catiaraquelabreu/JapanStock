import styles from "./styles.module.scss";

function HeroSection(props) {
  const titleContent = props.titleContent;

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>{titleContent}</h2>
        <p>Beautiful aerial photos & videos curated for you.</p>
      </div>
    </div>
  );
}

export default HeroSection;
