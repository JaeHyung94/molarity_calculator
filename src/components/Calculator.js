import { useState } from "react";
import convert from "convert-units";

const Calculator = (mass, massUnit, conc, concUnit, vol, volUnit, weight) => {
  if (mass === "" && conc !== "" && vol !== "") {
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
    const result = convert(cConc * cVol * parseInt(weight))
      .from("ng")
      .toBest();
    return result;
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
    const result = convert(cMass / (cVol * parseInt(weight)))
      .from("mol")
      .toBest();
    return result;
  } else if (mass !== "" && conc !== "" && vol == "") {
    const cMass = Math.round(
      convert(mass)
        .from(massUnit)
        .to("mg")
    );
    const cConc = Math.round(
      convert(conc)
        .from(concUnit)
        .to("mmol")
    );
    const result = convert(cMass / (cConc * parseInt(weight)))
      .from("ml")
      .toBest();
    console.log(result);
    return parseInt(mass) / (parseInt(conc) * parseInt(weight));
  } else {
    console.error("Something Wrong");
  }
};

export default Calculator;
