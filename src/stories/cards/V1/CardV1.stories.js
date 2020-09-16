import React from "react";
import Card from "./CardV1";

export default {
  title: "Cards/CardV1",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const V1 = Template.bind({});

V1.args = {
  image:
    "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  backgroundColor: "",
  textColor: "black",
  title: "A Memo To Remember: Stars Will Light The Sky",
  subtitle: "Test Subtitle",
  text:
    "A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.",
  buttonName: "Read More",
  buttonLink: "/",
};
