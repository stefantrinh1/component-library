import React from 'react'
import styled from 'styled-components'

export default function Hamburger({ toggleNav, navOpen }) {
  console.log(navOpen)

  const topBurgerOpen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%) rotate(135deg)',
    width: '30px',
  }

  const bottomBurgerOpen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%) rotate(-135deg) ',
    width: '30px',
  }

  return (
    <Container onClick={() => toggleNav()}>
      <Layer style={navOpen ? topBurgerOpen : { display: 'block' }} />
      <Layer style={{ display: `${navOpen ? 'none' : 'block'}` }} />
      <Layer style={navOpen ? bottomBurgerOpen : { display: 'block' }} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  padding: 1rem;
  cursor: pointer;
  margin: 0 0 0 auto;
  z-index: 10;
  @media (min-width: 1024px) {
    display: none;
    padding: 1.25rem;
  }
`

const Layer = styled.div`
  display: flex;
  align-self: flex-end;
  border-radius: 10px;
  height: 3px;
  border-radius: 500px;
  width: 30px;
  transform-origin: center;
  transition: all ease-in-out 0.4s;
  background: ${({ theme }) => theme.text};
`
