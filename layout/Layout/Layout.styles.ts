import { BREAKPOINTS } from "$constants/breakpoints";
import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

export const Layout = styled(AntdLayout)`
  background: transparent;
  min-height: 100vh;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled(AntdLayout.Content)`
  background: transparent;
  padding: 20px 20px 80px 20px;
  @media screen and (${BREAKPOINTS.md}) {
    padding: 60px 60px 100px 60px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 86px 86px 140px 86px;
  }
`;
