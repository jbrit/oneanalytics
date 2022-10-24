import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const Filter = styled(FlexibleDiv)`
  margin-bottom: 60px;
  align-items: flex-start;
  ${FlexibleDiv} {
    /* flex-direction: column;
    @media screen and (${BREAKPOINTS.md}) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      flex-direction: row;
      align-items: flex-start;
    } */
  }
`;
