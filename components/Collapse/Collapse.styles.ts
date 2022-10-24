import { BREAKPOINTS } from "$constants/breakpoints";
import { Collapse as AntdCollapse } from "antd";
import styled from "styled-components";

export const Collapse = styled(AntdCollapse)`
  background: transparent;
  border: 0;
  & > .ant-collapse-item {
    background: #11161d;
    border: 2px solid #343942;
  }
  & .ant-collapse-content,
  & .ant-collapse-item:last-child > .ant-collapse-content {
    background: #11161d;
    border: 0;
    border-radius: 0 0 15px 15px;
  }
  & .ant-collapse-content {
    padding: 0 14px 19px 14px;
  }
  & > .ant-collapse-item:last-child,
  & > .ant-collapse-item:last-child > .ant-collapse-header,
  & > .ant-collapse-item,
  & > .ant-collapse-item > .ant-collapse-header {
    border-radius: 15px;
  }
  & > .ant-collapse-item > .ant-collapse-header {
    padding: 19px 14px;
  }
  & .collapse-arrow-down {
    transition: transform 0.3s ease-in-out;
    width: 20px;
  }
  & .transaction-icon {
    width: 50px;
    height: 50px;
  }
  & > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    right: 14px;
  }
  @media screen and (${BREAKPOINTS.md}) {
    & > .ant-collapse-item > .ant-collapse-header {
      padding: 20px 30px;
    }
    & .ant-collapse-content {
      padding: 0 30px 20px 30px;
    }
    & > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
      right: 30px;
    }
  }
  @media screen and (${BREAKPOINTS.lg}) {
    & > .ant-collapse-item > .ant-collapse-header {
      padding: 29px 54px;
    }
    & .ant-collapse-content {
      padding: 0 54px 40px 54px;
    }
    & > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
      right: 54px;
    }
  }
  & .collapse-divider {
    margin-bottom: 24px;
    width: 100%;
    height: 2px;
    background-color: rgba(52, 57, 66, 0.67);
  }
  /* & > .ant-collapse-item > .ant-collapse-header {

  } */
`;

export const CollapsePanel = styled(AntdCollapse.Panel)`
  margin-bottom: 32px;
`;
