import { useState, useRef } from "react";
import Calculator from "./Calculator";

const ReadyCalc = ({ mw, cid }) => {
  const [mass, setMass] = useState("");
  const [conc, setConc] = useState("");
  const [vol, setVol] = useState("");
  const [weight, setWeight] = useState(mw);
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
      <div className="font-medium text-md">Calculator</div>
      <form onSubmit={onSubmit} className="flex flex-row justify-center items-center">
        <div>
          <div>
            <label htmlFor="mass" className="cal-label">Mass</label>
          </div>
          <div>
            <input name="mass" value={mass} onChange={handleMass} className="cal-input"></input>
            <select
              name="mass"
              defaultValue="mg"
              onChange={massSelect}
              ref={MassUnit}
            >
              <option value="ng">ng</option>
              <option value="ug">μg</option>
              <option value="mg">mg</option>
              <option value="g">g</option>
            </select>
          </div>
        </div>
        <div>=</div>
        <div>
          <div>
            <label htmlFor="concentration" className="cal-label">Concentration</label>
          </div>
          <div>
            <input
              name="concentration"
              value={conc}
              onChange={handleConc}
              className="cal-input"
            ></input>
            <select
              name="concentration"
              onChange={concSelect}
              defaultValue="mmol"
              ref={ConcUnit}
            >
              <option value="nmol">nM</option>
              <option value="umol">μM</option>
              <option value="mmol">mM</option>
              <option value="mol">M</option>
            </select>
          </div>
        </div>
        <div>X</div>
        <div>
          <div>
            <label htmlFor="volume" className="cal-label">Volume</label>
          </div>
          <div>  
            <input name="volume" value={vol} onChange={handleVol} className="cal-input"></input>
            <select
              name="volume"
              onChange={volSelect}
              defaultValue="ml"
              ref={VolUnit}
            >
              <option value="nl">nl</option>
              <option value="ul">μl</option>
              <option value="ml">ml</option>
              <option value="l">l</option>
            </select>
          </div>
        </div>
        <div>X</div>
        <div>
          <div>
            <label htmlFor="weight" className="cal-label">Molecular Weight</label>
          </div>
          <div>
            <input name="weight" value={mw} readOnly className="cal-input"></input>
            g/mol
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReadyCalc;
