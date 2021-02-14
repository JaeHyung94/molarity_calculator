const Solubility = ({ name, mw, sol }) => {

    const found = (name, mw) => {
      return (
        <div className="mt-10">
          <div className="font-medium">Solubility Information*</div>
          <ul>
            {sol.map((item, key) => <li key={key} className="font-normal text-sm mb-2">{key+1}: {item}</li>)}
          </ul>
          <div className="text-xs font-light">
            <div>*Solubility data is for information only. It may differ from actual solubility. Please check your data sheet.</div>
          </div>
        </div>
      );
    };
    const notFound = name => {
      return null
    };
  
    if (mw === "Not Found") {
      return notFound(name);
    } else {
      return found(name, mw);
    }
  };
  
  export default Solubility;