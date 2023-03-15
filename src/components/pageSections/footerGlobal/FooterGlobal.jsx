import CompanyLogo from "../../global/CompanyLogo";
import Contacts from "./Contacts";
import OpenTimes from "./OpenTimes";
import styles from "./footerGlobal.module.scss";

const FooterGlobal = () => {
  return (
    <footer className={styles.footerGlobal}>
      <div className={styles.footerContentWrapper}>
        <CompanyLogo className={styles.companyLogo} />
        <div className={styles.footerTextWrap}>
          <Contacts />
          <OpenTimes />
        </div>
      </div>
    </footer>
  );
};

export default FooterGlobal;
