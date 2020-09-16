import { configure, addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme, { themeLight } from "../src/theme";

global.__BASE_PATH__ = "";
global.__PATH_PREFIX__ = "";
// automatically import all files ending in *.stories.js
let req = require.context("../src/", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={themeLight}>
    <Theme />
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
