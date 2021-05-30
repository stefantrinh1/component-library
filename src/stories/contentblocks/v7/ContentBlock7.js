import React from 'react'
import styled from 'styled-components'

const ContentBlock = (props) => {
  const {
    images,
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
      {images && (
        <ImageColumn swapPosition={swapPosition}>
          {images.map((image) => (
            <ImageBox>
              <Image src={image} alt='contentpic' />
            </ImageBox>
          ))}
        </ImageColumn>
      )}
      <ContentColumn {...props}>
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
  color: ${({ textColor }) => textColor && textColor};
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 3rem;
  }
`

const ImageColumn = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  order: ${({ swapPosition }) => swapPosition && '2'};
  max-height: 80vh;
  img:nth-child(1) {
    margin-right: 0.5rem;
  }
  img:nth-child(2) {
    margin-left: 0.5rem;
  }
  margin: ${({ swapPosition }) =>
    swapPosition ? '1rem 0rem 0rem' : '0 0 1rem'};
  @media (min-width: 767px) {
    width: calc(50%);
    margin: 0rem;
  }
`

const ImageBox = styled.div`
  width: calc(50% - 0.25rem);
  margin: 0rem 0.5rem;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media (min-width: 767px) {
  }
`

const ContentColumn = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => {
    return backgroundColor && backgroundColor
  }};
  @media (min-width: 767px) {
    padding-left: 2rem;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    width: calc(50% + 3rem);
    margin: ${({ swapPosition }) =>
      swapPosition ? '0rem 0.5rem 0rem 0rem' : '0rem 0rem 0rem 0.5rem'};
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
  background-color: ${(theme) => (theme.primary ? theme.primary : '#2d2d2d')};
  color: ${(theme) => (theme.background ? theme.background : 'white')};
  width: fit-content;
  border-radius: 500px;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all ease-in-out 0.4s;
  border: 1px solid ${(theme) => (theme.primary ? theme.primary : '#2d2d2d')};
  &:hover {
    background-color: transparent;
    color: ${(theme) => (theme.text ? theme.text : 'black')};
  }
`

export default ContentBlock

ContentBlock.defaultProps = {
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
