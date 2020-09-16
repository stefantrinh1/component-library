import React from "react";
import styled from "styled-components";
import Card from "./CardV2";

export default function CardsV2(props) {
  const { cards } = props;

  return (
    <Container>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 767px) {
    & > div {
      width: calc(25% - (0.6rem * 2));
      margin: 0.5rem;
    }
  }
`;
