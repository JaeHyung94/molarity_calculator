const Explain = ({ name, mw }) => {
  return (
    <div>
      <h5>You are searching for {name}</h5>
      <h5>
        Molecular Weight of {name} : {mw}
      </h5>
    </div>
  );
};

export default Explain;
