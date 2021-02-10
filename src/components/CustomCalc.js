import { useState, useRef } from "react";
import Calculator from "./Calculator";

const CustomCalc = ({ mw }) => {
  const [mass, setMass] = useState("");
  const [conc, setConc] = useState("");
  const [vol, setVol] = useState("");
  const [weight, setWeight] = useState("");
  const [massUnit, setMassUnit] = useState("mg");
  const [concUnit, setConcUnit] = useState("mmol");
  const [volUnit, setVolUnit] = useState("ml");
  const MassUnit = useRef();
  const ConcUnit = useRef();
  const VolUnit = useRef();

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
    const result = Calculator(
      mass,
      massUnit,
      conc,
      concUnit,
      vol,
      volUnit,
      weight
    );
    if (result.empty === "nothing") {
      console.log("All Fields are Not Empty");
    } else if (result.empty === "mass") {
      setMass(result.result.val.toFixed(3));
      setMassUnit(result.result.unit);
      const optionArray = MassUnit.current.children;
      for (const option in optionArray) {
        if (optionArray[option].value === result.result.unit) {
          optionArray[option].setAttribute("selected", true);
        }
      }
    } else if (result.empty === "conc") {
      setConc(result.result.val.toFixed(3));
      setConcUnit(result.result.unit);
      const optionArray = ConcUnit.current.children;
      console.log(optionArray);
      for (const option in optionArray) {
        if (optionArray[option].value === result.result.unit) {
          optionArray[option].setAttribute("selected", true);
        }
      }
    } else if (result.empty === "volume") {
      setVol(result.result.val.toFixed(3));
      setVolUnit(result.result.unit);
      const optionArray = VolUnit.current.children;
      for (const option in optionArray) {
        if (optionArray[option].value === result.result.unit) {
          optionArray[option].setAttribute("selected", true);
        }
      }
    } else {
      console.log("Something Wrong during get calculation data");
    }
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
          <select
            name="mass"
            defaultValue="mg"
            onChange={massSelect}
            ref={MassUnit}
          >
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
            ref={ConcUnit}
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
          <select
            name="volume"
            onChange={volSelect}
            defaultValue="ml"
            ref={VolUnit}
          >
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
        <input type="submit" value="Submit" name="submit_btn"></input>
      </form>
    </div>
  );
};

export default CustomCalc;
