import { useState, useRef } from "react";
import axios from "axios";
import Explain from "./Explain";
import ReadyCalc from "./ReadyCalc";
import CustomCalc from "./CustomCalc";
import Solubility from "./Solubility";

const Weight = () => {
  const [custom, setCustom] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [mw, setMw] = useState("");
  const [sol, setSol] = useState([])
  const CustomRef = useRef();
  const handleQueryChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setCustom(false);
    if (CustomRef.current.checked === true) {
      CustomRef.current.checked = false;
    }
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
      getSolubility(Properties[0].CID);
    } catch {
      setCid("Not Found");
      setMw("Not Found");
    }
  };

  const getSolubility = async(cid) => {
    let results = []
    try {
        const result = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/${cid}/JSON?heading=solubility`)
        const solubilitySet = result.data.Record.Section[0].Section[0].Section[0].Information
        if (solubilitySet.length === 0) {
            const final_result = "Cannot find solubility data"
            results.push(final_result)
        } else if (solubilitySet.length === 1) {
            const final_result = solubilitySet[0].Value.StringWithMarkup[0].String
            results.push(final_result)
        } else {
            let n = 0;
            while (n < (solubilitySet.length)) {
                const temp = solubilitySet[n]
                if (temp.Value.StringWithMarkup[0].Markup) {
                    results.push(temp.Value.StringWithMarkup[0].String)
                }
                n++;
            }
        }
        return setSol(results)
    } catch (error) {
        console.log("Cannot get solubility data")
    }
}

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
    if (custom === false && mw !== "") {
      if (mw !== "Not Found") {
        return (
          <div>
            <Explain name={name} mw={mw} sol={sol} />
            <ReadyCalc name={name} mw={mw} custom={custom}></ReadyCalc>
            <Solubility name={name} mw={mw} sol={sol} />
          </div>
        );
      } else {
        return (
          <div>
            <Explain name={name} mw={mw} />
          </div>
        );
      }
    } else if (custom === true) {
      return <CustomCalc name={name} mw={mw} custom={custom}></CustomCalc>;
    } else {
      return null;
    }
  };

  return (
    <div className="container mx-auto w-4/5 md:w-3/5">
      <form onSubmit={handleSubmit} className="flex flex-row w-full mb-4">
        <input
          type="text"
          placeholder="Searching by Name"
          value={query}
          onChange={handleQueryChange}
          className="search-box border w-full px-4 py-2 mr-3 text-sm sm:text-base font-medium text-gray-900 placeholder-gray-600 rounded-sm shadow-md focus:outline-none"
        />
        <button className=" text-sm sm:text-base text-center font-medium px-2 rounded-sm py-2 text-gray-900 bg-blue-400 shadow-md focus:outline-none">Submit</button>
      </form>
      <form className="flex flex-row items-center">
        <label htmlFor="custom" className="text-xs sm:text-sm font-medium mr-2">Custom Calculation</label>
        <input
          name="custom"
          type="checkbox"
          onClick={handleCustom}
          ref={CustomRef}
          className="border border-gray-900"
        ></input>
      </form>
      <ShowExplain />
    </div>
  );
};

export default Weight;
