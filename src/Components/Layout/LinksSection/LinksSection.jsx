import LinksCol from "../../Features/LinksCol/LinksCol";
import data from "../../API/FakeApiAreas/data.json";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

function LinksSection() {
  const [displayedData, setDisplayedData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkViewportWidth = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkViewportWidth();

    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayedData(data.slice(0, 2));
    } else {
      setDisplayedData(data);
    }
  }, [isMobile, showAll]);

  const handleViewMoreClick = () => {
    setShowAll(true);
  };

  return (
    <div className={styles.content}>
      <div>
        <h2>Popular areas</h2>
        <div className={styles.links}>
          {displayedData.map((item, index) => (
            <LinksCol
              key={index}
              contentTitle={item.contentTitle}
              contentItems={item.contentItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinksSection;
