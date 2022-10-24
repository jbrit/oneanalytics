import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { ITokenTagProps } from "./TokenTag.types";

export const TokenTag = styled.p<ITokenTagProps>`
  padding: 10px 20px;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  margin-bottom: ${({ mb }) => mb};
  border-radius: 50px;
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    padding: 10px 25px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.8rem;
    line-height: 3.1rem;
    padding: 10px 35px;
  }
`;
