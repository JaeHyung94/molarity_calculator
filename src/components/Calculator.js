import { useState } from "react";
import convert from "convert-units";

const Calculator = (mass, massUnit, conc, concUnit, vol, volUnit, weight) => {
  console.log(
    convert(1)
      .from("ug")
      .to("ng")
  );
  if (mass === "" && conc !== "" && vol !== "") {
    return parseInt(conc) * parseInt(vol) * parseInt(weight);
  } else if (mass !== "" && conc === "" && vol !== "") {
    return parseInt(mass) / (parseInt(vol) * parseInt(weight));
  } else if (mass !== "" && conc !== "" && vol == "") {
    return parseInt(mass) / (parseInt(conc) * parseInt(weight));
  } else {
    console.error("Something Wrong");
  }
};

export default Calculator;
