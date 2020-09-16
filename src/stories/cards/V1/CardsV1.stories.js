import React from "react";
import Cards from "./CardsV1";
import CardsDummyData from "../CardDummyData";

export default {
  title: "Cards/CardsV1",
  component: Cards,
  argTypes: {
    // backgroundColor: { control: "color" },
    // textColor: { control: "color" },
  },
};

const Template = (args) => <Cards {...args} />;

export const V1 = Template.bind({});

V1.args = {
  cards: CardsDummyData,
};
