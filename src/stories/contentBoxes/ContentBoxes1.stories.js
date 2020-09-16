import React from "react";

import ContentBoxes from "./ContentBoxes1";

export default {
  title: "ContentBoxes/ContentBoxes1",
  component: ContentBoxes,
  argTypes: {
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ContentBoxes {...args} />;

export const V1 = Template.bind({});

V1.args = {
  images: [
    "https://raw.githubusercontent.com/stefantrinh1/publicAssets/master/Icons/ColoredIcons/food.png",
    "https://raw.githubusercontent.com/stefantrinh1/publicAssets/master/Icons/ColoredIcons/food.png",
    "https://raw.githubusercontent.com/stefantrinh1/publicAssets/master/Icons/ColoredIcons/food.png",
  ],
  titles: ["A Memo To Remember", "A Memo To Remember", "A Memo To Remember"],
  subtitles: [
    "Stars Will Light The Sky",
    "Stars Will Light The Sky",
    "Stars Will Light The Sky",
  ],
  texts: [
    "A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.",
    "A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.",
    "A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.",
  ],
  backgroundColor: "",
  textColor: "",
};
