import Logo from "../../UI/Logo/Logo";
import LinksCol from "../../Features/LinksCol/LinksCol";
import dataCompany from "../../API/FakeApiFooter/Company.json";
import dataCategories from "../../API/FakeApiFooter/PopularCategories.json";
import styles from "./styles.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <Logo color="#FFF" />
          <p className={styles.text}>
            Beautiful photos and videos sorted by geographic location.
          </p>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.links}>
            {dataCompany.map((item, index) => (
              <LinksCol
                key={index}
                contentTitle={item.contentTitle}
                contentItems={item.contentItems}
                color="white"
              />
            ))}
          </div>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.links}>
            {dataCategories.map((item, index) => (
              <LinksCol
                key={index}
                contentTitle={item.contentTitle}
                contentItems={item.contentItems}
                color="white"
              />
            ))}
          </div>
        </div>
        <div className={styles.contactUs}>
          <p>Connect with us</p>
          <div>
            <img src="https://svgur.com/i/vUz.svg"></img>
            <img src="https://svgur.com/i/vUe.svg"></img>
            <img src="https://svgur.com/i/vRr.svg"></img>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>
          <span>Copyright {currentYear} - JapanStock</span>
          <span>Specific moments captured.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
