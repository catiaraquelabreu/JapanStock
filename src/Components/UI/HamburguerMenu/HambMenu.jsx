import React from "react";
import styles from "./styles.module.scss";
import hambMenu from "/assets/IconHamb.svg";

// function HambMenu() {
//   return (
//     <div className={styles.hambContainer}>
//       <img src={hambMenu} alt="Hamb Icon"></img>
//       <div className={styles.openHamb}>
//         <div className={styles.actionsHamb}>
//           <div className={styles.spanHamb}>
//             <span>
//               <a href="#">My profile</a>
//             </span>
//           </div>
//           <div className={styles.spanHamb}>
//             <span>
//               <a href="#">My orders</a>
//             </span>
//           </div>
//           <div className={styles.spanHamb}>
//             <span>
//               <a href="#">Use Cases</a>
//             </span>
//           </div>
//           <div className={styles.spanHamb}>
//             <span>
//               <a href="#">About</a>
//             </span>
//           </div>
//           <div className={styles.spanHamb}>
//             <span>
//               <a href="#">Blog</a>
//             </span>
//           </div>
//           <div className={styles.spanHamb}>
//             <span>
//               <a href="#">Logout</a>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HambMenu;

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
