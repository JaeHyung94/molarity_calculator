import { useState } from "react";

const Calc = ({ mw }) => {
  const [mass, setMass] = useState("");
  const [conc, setConc] = useState("");
  const [vol, setVol] = useState("");
  const [weight, setWeight] = useState(mw);

  const handleMass = event => {
    setMass(event.target.value);
  };
  const handleConc = event => {
    setConc(event.target.value);
  };
  const handleVol = event => {
    setVol(event.target.value);
  };

  const handleMw = event => {
    setWeight(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    calculator();
  };

  const calculator = () => {
    console.log(mass, conc, vol, weight);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="mass">Mass</label>
          <input name="mass" value={mass} onChange={handleMass}></input>
        </div>
        <div>
          <label htmlFor="concentration">Concentration</label>
          <input
            name="concentration"
            value={conc}
            onChange={handleConc}
          ></input>
        </div>
        <div>
          <label htmlFor="volume">Volume</label>
          <input name="volume" value={vol} onChange={handleVol}></input>
        </div>
        <div>
          <label htmlFor="mw">Molecular Weight</label>
          <input
            name="mw"
            value={mw !== "" ? mw : weight}
            onChange={handleMw}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Calc;
