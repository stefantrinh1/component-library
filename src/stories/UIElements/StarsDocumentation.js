import React from 'react'
import styled from 'styled-components'

import CodeBlock from '../HelperBlocks/CodeBlock'
import { Title, Primary } from '@storybook/addon-docs/blocks'

const sampleCode = `
<H1> Test H1<H1>

`

export default () => (
  <Doc>
    <Title />
    <h2>UI STARS INPUT</h2>
    <p>
      A Simple Input Component that would be used as a rating input from 1 to 5,
      you may modify as you wish
    </p>

    <small>*credit fontawesome for icons</small>
    <Primary />
    <Line />
    <h2>Sample Code</h2>
    <CodeBlock code={imports} title={'imports'} />
    <CodeBlock code={starComponents} title={'Star Components'} />
    <CodeBlock code={renderStars} title={'Render Stars'} />
    <CodeBlock code={styles} title={'Styles'} />
    <CodeBlock code={completeComponent} title={'Complete Component'} />
  </Doc>
)

const Doc = styled.div`
  ul {
    margin: 0.5rem 0;
  }

  li {
    margin: 0.75rem 0;
  }
`

const Line = styled.hr`
  margin: 2rem 0;
`

// ?  ==========================
// ?  =====  Code Samples ======
// ?  ==========================

const imports = `import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
`

const starComponents = `const StarEmpty = ({ color, size, onClick }) => (
    <svg onClick={onClick} width={size ? size : '20'} viewBox='0 0 576 512'>
      <path
        fill={color ? color : 'black'}
        d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'></path>
    </svg>
  )

  const StarFilled = ({ color, size, onClick }) => (
    <svg onClick={onClick} width={size ? size : '20'} viewBox='0 0 576 512'>
      <path
        fill={color ? color : 'black'}
        d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
    </svg>
  )
`

const renderStars = `const [rating, setRating] = useState(null)

const StarSelector = ({ filled, onClick, color, size }) => {
  return filled ? (
    <StarFilled onClick={onClick} color={color} size={size} />
  ) : (
    <StarEmpty onClick={onClick} color={color} size={size} />
  )
}

const stars = [1, 2, 3, 4, 5]

const renderStars = () => {
  return stars.map(number => (
    <StarSelector
      key={\`stars\${number}\`}
      filled={rating > number - 1}
      size={70}
      color={'#ffc107'}
      onClick={() => setRating(number)}
    />
  ))
}

return <Container>{renderStars()}</Container>
`

const styles = `
const Container = styled.div\`
  background: linear-gradient(
    135deg,
    rgb(0 0 0 / 84%) 0%,
    rgb(41 54 73 / 95%) 100%
  );
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
\`

`

const completeComponent = `
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Stars(props) {

  const StarEmpty = ({ color, size, onClick }) => (
    <svg onClick={onClick} width={size ? size : '20'} viewBox='0 0 576 512'>
      <path
        fill={color ? color : 'black'}
        d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'></path>
    </svg>
  )

  const StarFilled = ({ color, size, onClick }) => (
    <svg onClick={onClick} width={size ? size : '20'} viewBox='0 0 576 512'>
      <path
        fill={color ? color : 'black'}
        d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
    </svg>
  )

  const [rating, setRating] = useState(null)

  const StarSelector = ({ filled, onClick, color, size }) => {
    return filled ? (
      <StarFilled onClick={onClick} color={color} size={size} />
    ) : (
      <StarEmpty onClick={onClick} color={color} size={size} />
    )
  }

  const stars = [1, 2, 3, 4, 5]

  const renderStars = () => {
    return stars.map(number => (
      <StarSelector
        key={\`stars\${number}\`}
        filled={rating > number - 1}
        size={70}
        color={'#ffc107'}
        onClick={() => setRating(number)}
      />
    ))
  }

  return <Container>{renderStars()}</Container>
}

const Container = styled.div\`
  background: linear-gradient(
    135deg,
    rgb(0 0 0 / 84%) 0%,
    rgb(41 54 73 / 95%) 100%
  );
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
\`


`
