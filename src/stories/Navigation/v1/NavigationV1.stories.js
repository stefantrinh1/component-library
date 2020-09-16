import React from "react";

import Navigation from "./Navigation";

export default {
  title: "Navigation/NavigationV1",
  component: Navigation,
  argTypes: {
    swapPosition: { control: "boolean" },
    textColor: { control: "color" },
    navbarBackgroundColor: { control: "color" },
    menuBackgroundColor: { control: "color" },
  },
};

const Template = (args) => <Navigation {...args} />;

export const V1 = Template.bind({});

V1.args = {
  navbarBackgroundColor: "",
  menuBackgroundColor: "",
};
