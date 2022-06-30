import { useStyles } from "./styles";
import React, { useRef } from "react";

const Player = () => {
  const css = useStyles();
  const ref = useRef();
  return (
    <div ref={ref} className={css.player}>
      a
    </div>
  );
};

export default Player;
