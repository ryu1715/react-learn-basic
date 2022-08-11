import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const style2 = {
    color,
    fontSize: "18px"
  };
  return <p style={style2}>{children}</p>;
};
