import React from "react";
import styled from "styled-components";

const ContentBlock2 = (props) => {
  const {
    backgroundImage,
    backgroundColor,
    textColor,
    title,
    subtitle,
    text,
    buttonName,
    buttonLink,
  } = props;
  return (
    <Container
      {...props}
      backgroundImage={backgroundImage}
      textColor={textColor}
      backgroundColor={backgroundColor}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {text && <Text>{text}</Text>}
      {buttonName && buttonLink && <Link href={buttonLink}>{buttonName}</Link>}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem;
  color: ${({ theme, textColor }) =>
    textColor ? textColor : theme.text ? theme.text : "black"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor
      ? backgroundColor
      : theme.background
      ? theme.background
      : "white"};
  background: ${({ backgroundImage }) => {
    return (
      backgroundImage &&
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`
    );
  }};
  background-size: cover;
  background-position: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.75rem;
  max-width: 400px;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin: 1rem 0 0;
  max-width: 500px;
`;

const Text = styled.p`
  margin: 1.5rem auto;
  line-height: 1.5;
  max-width: 600px;
  opacity: 0.7;
  @media (min-width: 767px) {
    margin: 2rem 0;
  }
`;

const Link = styled.a`
  display: inline-block;
  background-color: ${(theme) => (theme.primary ? theme.primary : "#2d2d2d")};
  color: ${(theme) => (theme.background ? theme.background : "#e6e6e6;")};
  width: fit-content;
  border-radius: 500px;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all ease-in-out 0.4s;
  border: 1px solid ${(theme) => (theme.primary ? theme.primary : "#2d2d2d")};
  &:hover {
    border: 1px solid ${(theme) => (theme.primary ? theme.primary : "#e6e6e6")};
    background-color: transparent;
  }
`;

export default ContentBlock2;

ContentBlock2.defaultProps = {
  backgroundImage: "",
  textColor: "",
  title: "",
  subtitle: "",
  text: "",
  buttonName: "",
  buttonLink: "",
};
