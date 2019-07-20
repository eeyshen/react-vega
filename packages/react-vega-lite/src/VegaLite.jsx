import React from "react";
import * as vl from "vega-lite";
import Vega from "../../react-vega/src/VegaEmbed";

const VegaLite = props => {
  const parsedProps = { ...props };
  const { spec, data } = props;
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

  return <Vega {...parsedProps} />;
};

VegaLite.propTypes = Vega.propTypes;

export default VegaLite;
