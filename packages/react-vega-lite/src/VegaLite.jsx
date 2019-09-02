import React from "react";
import * as vl from "vega-lite";
import VegaEmbed from "../../react-vega/src/VegaEmbed";
import Vega from "../../react-vega/src/Vega";

const VegaLite = props => {
  const parsedProps = { ...props };
  const { type, spec, data } = props;
  if (type === "vega-lite") {
    console.log("test");
    const combinedSpec = { ...spec };
    if (data) {
      combinedSpec.data = data;
      delete parsedProps.data;
    }
    try {
      parsedProps.spec = vl.compile(combinedSpec).spec;
    } catch (ex) {
      console.log("ERROR in spec compiling: ", ex);
    }
  }

  // return rnd ? <Vega {...parsedProps} /> : <VegaEmbed {...parsedProps} />;
  console.log("spec inner", spec);
  return <VegaEmbed {...parsedProps} />;
};

VegaLite.propTypes = Vega.propTypes;

export default VegaLite;
