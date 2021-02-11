import getSolubility from "./Solubility";

const Explain = ({ name, mw, cid }) => {
  console.log("explain start")
  const solubility = getSolubility(cid).then(value => console.log(value[0]))
  console.log(solubility)

  const found = (name, mw) => {
    return (
      <div>
        <h5>Solubility Information for "{name}"</h5>
        <h5>Molecular Weight of {name} is {mw}</h5>
      </div>
    );
  };
  const notFound = name => {
    return (
      <div>
        <h5>Cannot Found "{name}". Please try again</h5>
      </div>
    );
  };

  if (mw === "Not Found") {
    return notFound(name);
  } else {
    return found(name, mw);
  }
};

export default Explain;
