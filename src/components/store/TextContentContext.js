import { createContext, useState } from "react";
import { siteTextContent } from "../../data/data.js";


const TextContentContext = createContext();

const TextContentProvider = ({ children }) => {

  const [textContent] = useState(siteTextContent);



  return (
    <TextContentContext.Provider
      value={{
        textContent
      }}>
      {children}
    </TextContentContext.Provider>
  );
};

export default TextContentContext;
export { TextContentProvider };