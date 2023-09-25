import React, { useState } from "react";
import styles from "./styles.module.scss";

function LicenseOptions() {
  const [selectedLicense, setSelectedLicense] = useState("");

  const handleLicenseChange = (event) => {
    setSelectedLicense(event.target.value);
  };

  return (
    <div className={styles.options}>
      <label>
        <input
          type="radio"
          name="license"
          value="Single Use"
          checked={selectedLicense === "Single Use"}
          onChange={handleLicenseChange}
        />
        <span>Single Use - $99.00</span>
      </label>
      <label>
        <input
          type="radio"
          name="license"
          value="Unlimited"
          checked={selectedLicense === "Unlimited"}
          onChange={handleLicenseChange}
        />
        <span>Unlimited - $299.00</span>
      </label>
      <label>
        <input
          type="radio"
          name="license"
          value="Exclusive"
          checked={selectedLicense === "Exclusive"}
          onChange={handleLicenseChange}
        />
        <span>Exclusive - $899.00</span>
      </label>
    </div>
  );
}

export default LicenseOptions;
