import { useContext } from "react";
import TextContentContext from "../../store/TextContentContext";

const Contacts = () => {
  const { textContent } = useContext(TextContentContext);
  return (
    <div className="contacts">
      <address className="body_3">
        {textContent.general.contacts.address1}
        <br></br> {textContent.general.contacts.address2}
      </address>
      <p className="telNum body_3">
        <a href={`tel: ${textContent.general.contacts.tel}`}>{textContent.general.contacts.tel}</a>
      </p>
    </div>
  );
};

export default Contacts;
