import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

export default function CodeBlock({ code, title }) {
  return (
    <Container>
      <Header>
        <h3>{title ? title : 'Component'}</h3>
        <CopyButton
          onClick={() => {
            const textArea = document.getElementById('code_block')
            textArea.select()
            document.execCommand('copy')
          }}>
          <FontAwesomeIcon icon={faCopy} />
          Copy Code
        </CopyButton>
      </Header>
      <pre>
        <code>{code}</code>
      </pre>

      {/* A text area to place the code somewhere to copy and hide from screen */}
      <textarea
        style={{ position: 'absolute', top: '-3000px' }}
        readOnly
        id='code_block'
        value={code}
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem 0;
  pre {
    background-color: #242f42;
    color: white;
    padding: 1rem;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  h3 {
    flex-grow: 1;
  }
`
const CopyButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #ffc107;
  border: solid 2px #ffc107;
  color: white;
  transition: 'all ease-in-out 0.7s';
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: black;
  }
  svg {
    margin-right: 0.75rem;
  }
`
