import { useState } from "react";
import Calculator from "./Calculator";

const ReadyCalc = ({ mw, cid }) => {
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

  const onSubmit = event => {
    event.preventDefault();
    calculator();
  };

  const calculator = () => {
    console.log(Calculator(mass, conc, vol, weight));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="mass">Mass</label>
          <input name="mass" value={mass} onChange={handleMass}></input>
          <select name="mass">
            <option value="ng">Nanogram</option>
            <option value="ug">Microgram</option>
            <option value="mg">Milligram</option>
            <option value="g">Gram</option>
          </select>
        </div>
        <div>
          <label htmlFor="concentration">Concentration</label>
          <input
            name="concentration"
            value={conc}
            onChange={handleConc}
          ></input>
          <select name="concentration">
            <option value="nm">NanoMolar</option>
            <option value="um">MicroMolar</option>
            <option value="mm">MilliMolar</option>
            <option value="m">Molar</option>
          </select>
        </div>
        <div>
          <label htmlFor="volume">Volume</label>
          <input name="volume" value={vol} onChange={handleVol}></input>
          <select name="volume">
            <option value="nl">NanoLiter</option>
            <option value="ul">MicroLiter</option>
            <option value="ml">MilliLiter</option>
            <option value="l">Liter</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight">Molecular Weight</label>
          <input name="weight" value={mw} readOnly></input>
          g/mol
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReadyCalc;
