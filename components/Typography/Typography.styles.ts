import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { ITypographyProps } from "./Typography.types";

export const TypographyOne = styled.p<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "400"};
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.6)"};
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

export const TypographyTwo = styled.p<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.67)"};
  margin-bottom: ${({ mb }) => mb};
  word-break: break-all;
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.8rem;
    line-height: 3.1rem;
  }
`;

export const TypographyThree = styled.p<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.67)"};
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 1.8rem;
    line-height: 3.1rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2rem;
    line-height: 3.4rem;
  }
`;

export const TypographyFour = styled.p<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 2.4rem;
  line-height: 3.4rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.67)"};
  margin-bottom: ${({ mb }) => mb};
  word-break: break-all;
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 2.6rem;
    line-height: 4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2.8rem;
    line-height: 4.2rem;
  }
`;
