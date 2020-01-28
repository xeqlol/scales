import React from "react";

import { Bridge } from "../Bridge";
import { Frets } from "../Frets";

import "./styles.css";

export const Neck: React.FC<{
  strings: (number | null)[][];
  tuning: number[];
}> = ({ strings, tuning }) => (
  <div className={"frets"}>
    <Bridge strings={strings} tuning={tuning} />
    <Frets strings={strings} />
  </div>
);
