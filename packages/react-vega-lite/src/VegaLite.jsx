import React from "react";
import * as vl from "vega-lite";
import VegaEmbed from "../../react-vega/src/VegaEmbed";
import Vega from "../../react-vega/src/Vega";

const VegaLite = props => {
  const parsedProps = { ...props };
  const { spec, data, rnd } = props;
  const combinedSpec = { ...spec };
  if (data) {
    combinedSpec.data = data;
    delete parsedProps.data;
  }
  try {
    parsedProps.spec = vl.compile(combinedSpec).spec;
  } catch (ex) {
    console.log("编译错误：", ex);
  }

  return rnd ? <Vega {...parsedProps} /> : <VegaEmbed {...parsedProps} />;
};

VegaLite.propTypes = Vega.propTypes;

export default VegaLite;
