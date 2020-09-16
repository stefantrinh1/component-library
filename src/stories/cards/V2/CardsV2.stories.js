import React from "react";
import Cards from "./CardsV2";
import CardsDummyData from "../CardDummyData";

export default {
  title: "Cards/CardsV2",
  component: Cards,
  argTypes: {
    // backgroundColor: { control: "color" },
    // textColor: { control: "color" },
  },
};

const Template = (args) => <Cards {...args} />;

export const V2 = Template.bind({});

V2.args = {
  cards: CardsDummyData,
};
