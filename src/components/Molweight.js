import { useState } from "react";
import axios from "axios";
import Explain from "./Explain";
import Calc from "./Calculator";

const Weight = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [mw, setMw] = useState("");
  const handleQueryChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
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
      <Explain name={name} mw={mw}></Explain>
      <Calc name={name} mw={mw}></Calc>
    </div>
  );
};

export default Weight;
