import Logo from "../../UI/Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Btn from "../../UI/Button/Btn";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import AvatarDropDown from "../../UI/Dropdown/Dropdown";
import HambMenuDropDown from "../../UI/HamburguerMenu/HambMenu";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div></div>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.hamb}>
          <HambMenuDropDown />
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
        <div className={styles.actions}>
          <div className={styles.actionsSpan}>
            <span>
              <a href="#">Use Cases</a>
            </span>
            <span>
              <a href="#">About</a>
            </span>
            <span>
              <a href="#">Blog</a>
            </span>
          </div>
          <Btn content="+ Submit" />
          <div className={styles.avatar}>
            <img className={styles.avatarImg} src="assets\avatar.jpg"></img>
            <AvatarDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
