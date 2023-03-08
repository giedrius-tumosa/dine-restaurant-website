import FigureImage from "./FigureImage";
import Logo from "../../images/logo.svg";

const CompanyLogo = ({ size, className }) => {
  return (
    <FigureImage
      className={className}
      src={Logo}
      alt="Company logo."
      width={size === "small" ? 82 : 103.42}
      height={size === "small" ? 32 : 40}
    />
  );
};

export default CompanyLogo;
