import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const {
    image,
    title,
    subtitle,
    text,
    buttonName,
    buttonLink,
    backgroundColor,
    textColor,
  } = props;
  return (
    <Container
      {...props}
      backgroundColor={backgroundColor}
      textColor={textColor}>
      {image && (
        <ImageContainer>
          <ImageFill />
          <Image src={image} alt="contentpic" />
        </ImageContainer>
      )}
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {text && <Text>{text}</Text>}
        {buttonLink && buttonName && (
          <Link href={buttonLink}>{buttonName}</Link>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  color: ${({ textColor }) => textColor && textColor};
  @media (min-width: 767px) {
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const ImageFill = styled.div`
  padding-bottom: 100%;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  @media (min-width: 767px) {
  }
`;

const Content = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  @media (min-width: 767px) {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h3`
  margin: 0rem;
  font-size: 1.75rem;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin: 0rem;
`;

const Text = styled.p`
  margin: 1rem 0;
`;

const Link = styled.a`
  display: inline-block;
  background-color: ${(theme) => (theme.primary ? theme.primary : "#2d2d2d")};
  color: ${(theme) => (theme.background ? theme.background : "white")};
  width: fit-content;
  border-radius: 500px;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all ease-in-out 0.4s;
  border: 1px solid ${(theme) => (theme.primary ? theme.primary : "#2d2d2d")};
  &:hover {
    background-color: transparent;
    color: ${(theme) => (theme.text ? theme.text : "black")};
  }
`;

export default Card;

Card.defaultProps = {
  image: "",
  title: "",
  subtitle: "",
  text: "",
  buttonName: "",
  buttonLink: "",
  backgroundColor: "",
  textColor: "",
};
