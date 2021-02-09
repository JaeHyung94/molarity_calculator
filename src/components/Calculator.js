import { useState } from "react";
import convert from "convert-units";

const Calculator = (mass, massUnit, conc, concUnit, vol, volUnit, weight) => {
  weight = parseFloat(weight)
  if (mass !== "" && conc !== "" && vol !== "") {
    console.log("All Fields are not Empty!!")
    return {empty: "nothing", result: null}
  } else if (mass === "" && conc !== "" && vol !== "") {
    const cConc = Math.round(
      convert(parseInt(conc))
        .from(concUnit)
        .to("mmol")
    );
    const cVol = Math.round(
      convert(parseInt(vol))
        .from(volUnit)
        .to("ml")
    );
    const result = convert(cConc * cVol * weight)
      .from("ng")
      .toBest();
    return {empty: "mass", result: result};
  } else if (mass !== "" && conc === "" && vol !== "") {
    const cMass = Math.round(
      convert(parseInt(mass))
        .from(massUnit)
        .to("mg")
    );
    const cVol = Math.round(
      convert(parseInt(vol))
        .from(volUnit)
        .to("ml")
    );
    const result = convert(cMass / (cVol * weight))
      .from("mol")
      .toBest();
    return {empty: "conc", result: result};
  } else if (mass !== "" && conc !== "" && vol == "") {
    const cMass = Math.round(
      convert(mass)
        .from(massUnit)
        .to("mg"));
    const cConc =
      Math.round(convert(conc)
        .from(concUnit)
        .to("mmol"));
    const result = convert(cMass / (cConc * weight))
      .from("l")
      .toBest();
    return {empty:"volume", result: result};
  } else {
    console.error("Something Wrong");
  }
};

export default Calculator;
