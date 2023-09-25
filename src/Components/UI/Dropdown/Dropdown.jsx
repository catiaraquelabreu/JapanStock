import React from "react";
import styles from "./styles.module.scss";

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

const AvatarDropDown = () => {
  const { isDropdownOpen, handleDropdownToggle, handleItemClick } =
    useDropdown();

  return (
    <div className={styles.containerDrop}>
      <div className={styles.dropdownOpen}>
        <div className={styles.dropdownAvatar} onClick={handleDropdownToggle}>
          <img src="https://svgur.com/i/va9.svg" alt="" />
        </div>
        {isDropdownOpen && (
          <div className={styles.dropdownMenu1}>
            <ul>
              <li onClick={() => handleItemClick("My orders")}>My orders</li>
              <li onClick={() => handleItemClick("Edit Profile")}>
                Edit Profile
              </li>
              <div className={styles.logout}>
                <li onClick={() => handleItemClick("Logout")}>Logout</li>
                <img
                  className={styles.out}
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

export default AvatarDropDown;
