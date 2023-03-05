import FigureImage from "./FigureImage";
import Logo from "../../images/logo.svg";

const CompanyLogo = () => {
  return (
    <FigureImage
      className="companyLogo"
      src={Logo}
      alt="Company logo."
      width={103.42}
      height={40}
    />
  );
};

export default CompanyLogo;
