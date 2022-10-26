import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Gordita' !important;
    background-color: #0D1117;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    &:hover {
      color: rgba(255, 255, 255, 0.6)
    }
  }
  p {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }
      &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #161B22;
      }
      &::-webkit-scrollbar-thumb:active {
        background: #161B22;
      }
      &::-webkit-scrollbar-track {
        border-radius: 53px;
      }
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    height: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .ant-picker-panel-container {
    background-color: #0D1117;
  }
  .ant-picker-cell-in-view {
    color: #fff;
  }
  .ant-picker-header {
    color: #707276;
  }
  .ant-picker-prev-icon::before, .ant-picker-next-icon::before, .ant-picker-super-prev-icon::before, .ant-picker-super-next-icon::before,
  .ant-picker-super-prev-icon::after, .ant-picker-super-next-icon::after {
    border: 0 solid #707276;
    border-width: 1.5px 0 0 1.5px;
  }
  .ant-picker-panel-container .ant-picker-panel {
    padding: 20px 10px 0 20px;
  }
  .ant-picker-header button {
    display: inline-block;
  }
  .ant-picker-header {
    border-bottom: 1px solid #343942; 
  }
  .ant-picker-content th {
    color: #707276;
  }
  
  .ant-picker-cell-in-view, .ant-picker-cell {
    color: rgba(255, 255, 255, 0.67);
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {    background: transparent;
    color: rgba(255, 255, 255, 0.67);
  }
  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    border: 1px solid #707276;
  }
  .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner, .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner {
    background: transparent;
    color: rgba(255, 255, 255, 0.67);
  }
  .ant-picker-panel .ant-picker-footer {
    border-top: 1px solid #343942; 
  }
  .ant-picker-panel {
    border-bottom: 1px solid #343942; 
  }
  .ant-picker-today-btn {
    color: rgba(255, 255, 255, 0.67);
  }
  .ant-picker-clear {
    background: #707276;
    color: #343942;
  }
  .ant-select-dropdown {
    background-color: #0D1117;
  }
  .ant-select-item {
    color: rgba(255, 255, 255, 0.67);
    font-weight: 300;
  }
  .ant-select-item-option-active:not(.ant-select-item-option-disabled), .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #0D1117;
    color: rgba(255, 255, 255, 0.87);
  }
  .ant-empty-img-simple-path, .ant-empty-img-simple-ellipse {
    fill: rgba(255,255,255,0.6);
  }
  .ant-empty-small, .ant-empty-normal {
    color: rgba(255, 255, 255, 0.87);
  }
  .ant-empty-img-simple-g {
    stroke: rgba(255,255,255,0.6);
  }
  .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link, .ant-pagination-item, .ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next {
    background-color: #11161d;
    border: 1px solid #343942;
    & .anticon svg {
      fill: rgba(255, 255, 255, 0.67);
    }
  }
  .ant-select-arrow svg {
      fill: rgba(255, 255, 255, 0.67);
  }
  .ant-pagination-item a, .ant-select-selection-item {
    color: rgba(255, 255, 255, 0.67);
  }
  .ant-pagination-item-active {
    border-color: #707276;
  }
`;
