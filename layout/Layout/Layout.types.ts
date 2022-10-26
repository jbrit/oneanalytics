import { ReactNode } from "react";
import CSSTypes from "csstype";

export interface ILayoutProps {
  search: any;
  children: ReactNode;
  headerChildren: ReactNode;
  contentJustify?: CSSTypes.Property.JustifyContent;
}
