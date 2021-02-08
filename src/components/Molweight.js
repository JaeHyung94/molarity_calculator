import { useState } from "react";
import axios from "axios";
import Explain from "./Explain";
import ReadyCalc from "./ReadyCalc";
import CustomCalc from "./CustomCalc";

const Weight = () => {
  const [custom, setCustom] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [mw, setMw] = useState("");
  const handleQueryChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setCustom(false);
    getData(query);
    setName(query);
    setQuery("");
  };
  const getData = async query => {
    try {
      const {
        data: {
          PropertyTable: { Properties }
        }
      } = await axios.get(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${query}/property/MolecularWeight/JSON`
      );
      setCid(Properties[0].CID);
      setMw(Properties[0].MolecularWeight);
    } catch {
      setCid("Not Found");
      setMw("Not Found");
    }
  };

  const handleCustom = event => {
    setCustom(event.target.checked);

    if (custom === true) {
      setQuery("");
      setName("");
      setCid("");
      setMw("");
    }
  };

  const ShowExplain = () => {
    if (custom === false && cid !== "") {
      return (
        <div>
          <Explain name={name} mw={mw} />
          <ReadyCalc name={name} mw={mw} custom={custom}></ReadyCalc>
        </div>
      );
    } else if (custom === true) {
      return <CustomCalc name={name} mw={mw} custom={custom}></CustomCalc>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching by Name"
          value={query}
          onChange={handleQueryChange}
        />
        <button>Submit</button>
      </form>
      <form>
        <label htmlFor="custom">Custom Calculation</label>
        <input
          name="custom"
          type="checkbox"
          onClick={handleCustom}
          id="customBox"
        ></input>
      </form>
      <ShowExplain />
    </div>
  );
};

export default Weight;
