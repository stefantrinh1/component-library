import React from 'react'
import styled from 'styled-components'

const ContentBlock1 = props => {
  const {
    image,
    title,
    subtitle,
    text,
    buttonName,
    buttonLink,
    swapPosition,
    backgroundColor,
    textColor,
  } = props

  return (
    <Container
      {...props}
      backgroundColor={backgroundColor}
      textColor={textColor}>
      {image && (
        <ImageColumn swapPosition={swapPosition}>
          <ImageFill />
          <Image src={image} alt='contentpic' />
        </ImageColumn>
      )}
      <ContentColumn>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {text && <Text>{text}</Text>}
        {buttonLink && buttonName && (
          <Link href={buttonLink}>{buttonName}</Link>
        )}
      </ContentColumn>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  color: ${({ textColor }) => textColor && textColor};
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`

const ImageColumn = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  order: ${({ swapPosition }) => swapPosition && '2'};
  @media (min-width: 767px) {
    width: 50%;
  }
`
const ImageFill = styled.div`
  padding-bottom: 100%;
`
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
`

const ContentColumn = styled.div`
  padding: 1rem 0;
  box-sizing: border-box;
  @media (min-width: 767px) {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    width: 50%;
  }
`

const Title = styled.h3`
  margin: 0rem;
  font-size: 1.75rem;
`

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin: 0rem;
`

const Text = styled.p`
  margin: 1rem 0;
  max-width: 767px;
  @media (min-width: 767px) {
    margin: 2rem 0;
  }
`

const Link = styled.a`
  display: inline-block;
  background-color: ${theme => (theme.primary ? theme.primary : '#2d2d2d')};
  color: ${theme => (theme.background ? theme.background : 'white')};
  width: fit-content;
  border-radius: 500px;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all ease-in-out 0.4s;
  border: 1px solid ${theme => (theme.primary ? theme.primary : '#2d2d2d')};
  &:hover {
    background-color: transparent;
    color: ${theme => (theme.text ? theme.text : 'black')};
  }
`

export default ContentBlock1

ContentBlock1.defaultProps = {
  image:
    'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  title: 'Title',
  subtitle: 'Subtitle',
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  buttonName: 'Button',
  buttonLink: '/',
  swapPosition: false,
  backgroundColor: '',
  textColor: '',
}
