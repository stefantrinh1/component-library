import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
  body {
    background-color: ${() => theme.background};
    color: ${() => theme.text};
    font-family: "Roboto", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1rem 0;
    text-transform: capitalize;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
  }
  p {
    font-family: "Roboto", sans-serif;
  }
  button {
    border: solid 2px ${() => theme.text};
    background: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${() => theme.text};
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
  /* * {
        min-height: 0;
        min-width: 0;
    } */
`}
`;

export const defaultTheme = {};

export const themeDark = {
  // background: "#272727",
  text: "#fdfdfd",
  primary: `#ba000d`,
  secondary: `rgb(202, 54, 37)`,
  tertiary: `rgb(202, 54, 37)`,
  dark: `black`,
  light: `white`,
};

export const themeLight = {
  // background: "#eaeaea",
  text: "#272727",
  primary: `#ba000d`,
  secondary: `rgb(202, 54, 37)`,
  tertiary: `rgb(202, 54, 37)`,
  dark: `black`,
  light: `white`,
};
