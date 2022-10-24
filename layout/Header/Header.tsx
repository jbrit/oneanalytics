import { FC } from "react";
import { StyledHeader } from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const Header: FC<IHeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
