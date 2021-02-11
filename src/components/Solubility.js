import axios from "axios"

const getSolubility = async(cid) => {
    console.log("get solubility")
    try {
        let results = {}
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
                    results[n]=temp.Value.StringWithMarkup[0].String
                }
                n++;
            }
        }
        return results
    } catch (error) {
        console.log("Cannot get solubility data")
    }

}

export default getSolubility