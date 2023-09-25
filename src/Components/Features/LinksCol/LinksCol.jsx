import styles from "./styles.module.scss";

function LinksCol({ contentTitle, contentItems, color }) {
  if (!Array.isArray(contentItems)) {
    return null;
  }

  const colorStyle = {
    color: color || "inherit",
  };

  return (
    <div className={styles.div}>
      <h4 style={colorStyle}>{contentTitle}</h4>
      <ul>
        {contentItems.map((item, index) => (
          <li key={index}>
            <a href="#" style={colorStyle}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinksCol;
