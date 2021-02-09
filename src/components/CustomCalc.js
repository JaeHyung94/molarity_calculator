import { useState } from "react";
import Calculator from "./Calculator";
import { Select } from "./CommonCalc";

const CustomCalc = ({ mw }) => {
  const [mass, setMass] = useState("");
  const [conc, setConc] = useState("");
  const [vol, setVol] = useState("");
  const [weight, setWeight] = useState("");
  const [massUnit, setMassUnit] = useState("mg");
  const [concUnit, setConcUnit] = useState("mm");
  const [volUnit, setVolUnit] = useState("ml");

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
    return Calculator(mass, massUnit, conc, concUnit, vol, volUnit, weight);
  };

  const massSelect = event => {
    setMassUnit(event.target.value);
  };

  const concSelect = event => {
    setConcUnit(event.target.value);
  };

  const volSelect = event => {
    setVolUnit(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="mass">Mass</label>
          <input name="mass" value={mass} onChange={handleMass}></input>
          <select name="mass" defaultValue="mg" onChange={massSelect}>
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
          <select
            name="concentration"
            onChange={concSelect}
            defaultValue="mmol"
          >
            <option value="nmol">Nanomolar</option>
            <option value="umol">Micromolar</option>
            <option value="mmol">Millimolar</option>
            <option value="mol">Molar</option>
          </select>
        </div>
        <div>
          <label htmlFor="volume">Volume</label>
          <input name="volume" value={vol} onChange={handleVol}></input>
          <select name="volume" onChange={volSelect} defaultValue="ml">
            <option value="nl">Nanoliter</option>
            <option value="ul">Microliter</option>
            <option value="ml">Milliliter</option>
            <option value="l">Liter</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight">Molecular Weight</label>
          <input name="weight" value={weight} onChange={handleMw}></input>
          g/mol
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CustomCalc;
