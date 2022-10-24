import { DatePicker as AntdDatePicker } from "antd";
import styled from "styled-components";

export const DatePicker = styled(AntdDatePicker)`
  background: transparent;
  height: 44px;
  border: 2px solid #343942;
  border-radius: 10px;
  color: #707276;
  font-size: 1.8rem;
  line-height: 1.5rem !important;
  .ant-picker-input > input {
    font-size: 1.5rem;
  }
  &:hover,
  &:focus {
    border-color: #343942;
  }
`;
