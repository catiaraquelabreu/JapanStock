import React from "react";
import styles from "./styles.module.scss";
import { useSubHeader } from "./SubHeaderContext";

function SubHeader() {
  const { selectedCategory, setCategory } = useSubHeader();

  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.options}>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "Photos"}
              onChange={() => setCategory("Photos")}
            />
            <span>Photos</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "Videos"}
              onChange={() => setCategory("Videos")}
            />
            <span>Videos</span>
          </label>
        </div>
        <div className={styles.option}>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "All"}
              onChange={() => setCategory("All")}
            />
            <span>All</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
