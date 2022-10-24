import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
import { BREAKPOINTS } from "$constants/breakpoints";

export const StyledFooter = styled(AntdLayout.Footer)`
  background: transparent;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 2px solid rgba(52, 57, 66, 0.67);
  @media screen and (${BREAKPOINTS.md}) {
    padding: 20px 60px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 30px 86px;
  }
`;
