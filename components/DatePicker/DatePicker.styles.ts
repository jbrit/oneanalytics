import { DatePicker as AntdDatePicker } from "antd";
import styled from "styled-components";

export const DatePicker = styled(AntdDatePicker)`
  background: transparent;
  height: 44px;
  border: 2px solid #343942;
  border-radius: 10px;
  color: #707276;
  .ant-picker-input > input,
  .ant-picker-input > input::placeholder {
    font-size: 1.6rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #707276;
  }
  &:hover,
  &:focus {
    border-color: #343942;
  }
`;
