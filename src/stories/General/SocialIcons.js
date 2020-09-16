import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import Facebook from "../Logos/Facebook";
import Instagram from "../Logos/Instagram";
import Twitter from "../Logos/Twitter";
import Pinterest from "../Logos/Pinterest";
import YouTube from "../Logos/YouTube";

export default function SocialIcons() {
  return (
    <Container>
      <Facebook />
      <Instagram />
      <Twitter />
      <Pinterest />
      <YouTube />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 200px;
  svg {
    height: 1rem;
  }
`;
