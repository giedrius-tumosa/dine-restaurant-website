import FigureImage from "./FigureImage";
import Logo from "../../images/logo.svg";
import styles from "../pageSections/footerGlobal/footerGlobal.module.scss";

const CompanyLogo = () => {
  return (
    <FigureImage
      className={StyleSheet.companyLogo}
      src={Logo}
      alt="Company logo."
      width={103.42}
      height={40}
    />
  );
};

export default CompanyLogo;
