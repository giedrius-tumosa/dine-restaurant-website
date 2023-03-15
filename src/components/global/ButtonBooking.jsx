import { Link } from "react-router-dom";

const ButtonBooking = (props) => {
  return (
    <div className={`bookingBtn ${props.className}`}>
      <Link to={"/reservation"}>
        <span>book a table</span>
      </Link>
    </div>
  );
};

export default ButtonBooking;
