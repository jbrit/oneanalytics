import { Dispatch, SetStateAction } from "react";
import CSSTypes from "csstype";

export interface IMultiSearchProps {
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
  onSearch: () => void;
}
