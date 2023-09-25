import React from "react";
import styles from "./styles.module.scss";
import { SubHeaderProvider } from "../../Layout/SubHeader/SubHeaderContext";

const useDropdown = () => {
  const [selectedItem, setSelectedItem] = React.useState("All");
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

const useSearch = (selectedItem) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery || "Japanese City";
    const category = selectedItem;
    window.location.href = `/results?q=${query}&category=${category}`;
  };

  return {
    searchQuery,
    setSearchQuery,
    handleSearchSubmit,
  };
};

const SearchBar = () => {
  const {
    selectedItem,
    isDropdownOpen,
    handleDropdownToggle,
    handleItemClick,
  } = useDropdown();

  const { searchQuery, setSearchQuery, handleSearchSubmit } =
    useSearch(selectedItem);

  return (
    <SubHeaderProvider>
      {" "}
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader} onClick={handleDropdownToggle}>
            <p>{selectedItem}</p>
            <img src="https://svgur.com/i/va9.svg" alt="" />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <ul>
                <li onClick={() => handleItemClick("Photos")}>Photos</li>
                <li onClick={() => handleItemClick("Videos")}>Videos</li>
                <li onClick={() => handleItemClick("All")}>All</li>
              </ul>
            </div>
          )}
        </div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search a Location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <img src="https://svgur.com/i/vFm.svg" alt="" />
          </button>
        </form>
      </div>
    </SubHeaderProvider>
  );
};

export default SearchBar;
