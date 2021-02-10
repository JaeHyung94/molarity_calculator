const Explain = ({ name, mw }) => {
  const found = (name, mw) => {
    return (
      <div>
        <h5>You are searching for {name}</h5>
        <h5>
          Molecular Weight of {name} : {mw}
        </h5>
      </div>
    );
  };
  const notFound = name => {
    return (
      <div>
        <h5>Something Wrong!</h5>
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
