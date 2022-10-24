import { Select as AntdSelect, SelectProps } from "antd";
import { FC } from "react";
import styled from "styled-components";
import { ArrowDown } from "svg/arrow-down";

export const Select = styled(AntdSelect)`
  height: 44px;
  width: auto;
  display: flex;
  align-items: center;
  &:not(.ant-select-customize-input) .ant-select-selector {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 15px 14px;
    background-color: transparent;
    border: 2px solid #343942;
    border-radius: 10px;
  }

  &:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #343942;
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none;
    border-color: #343942;
  }

  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    color: #707276;
    font-size: 1.5rem;
    line-height: 1.5rem !important;
  }
  .ant-select-selection-overflow {
    align-items: center;
    gap: 5px;
  }
`;
