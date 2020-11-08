import React from "react";

import ContentBlock from "./ContentBlock1";

export default {
  title: "ContentBlocks/ContentBlock1",
  component: ContentBlock,
  argTypes: {
    swapPosition: { control: "boolean" },
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ContentBlock {...args} />;

export const V1 = Template.bind({});
export const V1a = Template.bind({});

V1.args = {
  image:
    "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  title: "A Memo To Remember",
  subtitle: "Stars Will Light The Sky",
  text:
    "A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.",
  buttonName: "Learn More",
  buttonLink: "/",
  swapPosition: false,
};

V1a.args = {
  image:
    "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  title: "A Memo To Remember",
  subtitle: "Stars Will Light The Sky",
  text:
    "A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.",
  buttonName: "Learn More",
  buttonLink: "/",
  swapPosition: true,
  backgroundColor: "black",
  textColor: "white",
};
