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
    background-color: #11161D;
  }
  .ant-picker-cell-in-view {
    color: #fff;
  }
`;
