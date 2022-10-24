import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Gordita";
    src: url("/fonts/Gordita Black.otf");
    font-weight: 700;
    font-style: normal;
    font-display: swap
  }

  @font-face {
    font-family: "Gordita";
    src: url("/fonts/Gordita Medium.otf");
    font-weight: 500;
    font-style: normal;
    font-display: swap
  }

  @font-face {
    font-family: "Gordita";
    src: url("/fonts/Gordita Regular.otf");
    font-weight: 400;
    font-style: normal;
    font-display: swap
  }

  @font-face {
    font-family: "Gordita";
    src: url("/fonts/Gordita Thin.otf");
    font-weight: 300;
    font-style: normal;
    font-display: swap
  }

@font-face {
  font-family: "Gordita";
  src: url("/fonts/Gordita Ultra.otf");
  font-weight:200;
  font-style: normal;
  font-display: swap
}
`;
