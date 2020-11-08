import React from 'react'
import styled from 'styled-components'

const TitleBlock = (props) => {
  const { title, subtitle, text, backgroundColor, textColor } = props

  return (
    <Container
      {...props}
      backgroundColor={backgroundColor}
      textColor={textColor}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {text && <Text>{text}</Text>}
    </Container>
  )
}

const Container = styled.section`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1rem;

  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  color: ${({ textColor }) => textColor && textColor};
  @media (min-width: 767px) {
  }
`

const Title = styled.h3`
  margin: 0rem;
  font-size: 2.5em;
  text-transform: uppercase;
`

const Subtitle = styled.h3`
  font-size: 1.5em;
  margin: 0rem;
  text-transform: uppercase;
  opacity: 0.6;
`

const Text = styled.p`
  max-width: 767px;
  font-size: 1em;
  margin: 0.5rem 0rem;
  @media (min-width: 767px) {
  }
`

export default TitleBlock

TitleBlock.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  backgroundColor: '',
  textColor: '',
}
