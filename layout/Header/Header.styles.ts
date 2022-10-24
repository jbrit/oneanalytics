import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
import { BREAKPOINTS } from "$constants/breakpoints";

export const StyledHeader = styled(AntdLayout.Header)`
  background: #161b22;
  padding: 10px 20px;
  height: fit-content;
  @media screen and (${BREAKPOINTS.md}) {
    padding: 32px 60px;
  }
  @media screen and (${BREAKPOINTS.xl}) {
    padding: 30px 86px;
  }
`;
