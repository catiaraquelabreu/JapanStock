import React from "react";
import styles from "./styles.module.scss";
import hambMenu from "/assets/IconHamb.svg";

const useDropdown = () => {
  const [selectedItem, setSelectedItem] = React.useState();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return {
    selectedItem,
    isDropdownOpen,
    handleDropdownToggle,
    handleItemClick,
  };
};

const HambMenuDropDown = () => {
  const { isDropdownOpen, handleDropdownToggle, handleItemClick } =
    useDropdown();

  return (
    <div className={styles.hambContainer}>
      <div className={styles.dropdownHambOpen}>
        <div className={styles.dropdownHamb} onClick={handleDropdownToggle}>
          <img src={hambMenu} alt="" />
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdownMenuHamb}>
            <ul>
              <li onClick={() => handleItemClick("My profile")}>My Profile</li>
              <li onClick={() => handleItemClick("My orders")}>My orders</li>
              <li onClick={() => handleItemClick("Use Cases")}>Use Cases</li>
              <li onClick={() => handleItemClick("About")}>About</li>
              <li onClick={() => handleItemClick("Blog")}>Blog</li>
              <div className={styles.logoutMenu}>
                <li onClick={() => handleItemClick("Logout")}>Logout</li>
                <img
                  className={styles.outIcon}
                  src="https://svgur.com/i/xc7.svg"
                  alt=""
                />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HambMenuDropDown;
