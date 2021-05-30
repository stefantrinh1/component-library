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
    <h2>Loading page Logo Spinner</h2>
    <p>A Simple Atom Loading Spinner</p>

    <Primary />
    <Line />
    <h2>Sample Code</h2>
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

const completeComponent = `
import React from 'react'
import styled from 'styled-components'

export default props => {
  const Logo = () => (
    <svg width='217px' height='217px' viewBox='0 0 217 230'>
      <g id='The' fill='#FFFFFF' transform='translate(86 0)'>
        <path d='M29.052 -3.444L29.052 10.02Q29.988 7.572 31.662 6.636Q33.336 5.7 35.172 5.7Q36.54 5.7 37.458 6.06Q38.376 6.42 38.988 7.068Q39.672 7.788 39.96 8.868Q40.248 9.948 40.248 11.784L40.248 21.396Q40.248 22.908 40.878 23.448Q41.508 23.988 42.984 23.988L42.984 24.744Q42.372 24.708 41.112 24.654Q39.852 24.6 38.664 24.6Q37.476 24.6 36.342 24.654Q35.208 24.708 34.632 24.744L34.632 23.988Q35.928 23.988 36.468 23.448Q37.008 22.908 37.008 21.396L37.008 10.992Q37.008 9.876 36.828 8.94Q36.648 8.004 36.018 7.428Q35.388 6.852 34.092 6.852Q31.896 6.852 30.474 8.67Q29.052 10.488 29.052 13.368L29.052 21.396Q29.052 22.908 29.592 23.448Q30.132 23.988 31.428 23.988L31.428 24.744Q30.852 24.708 29.718 24.654Q28.584 24.6 27.396 24.6Q26.208 24.6 24.948 24.654Q23.688 24.708 23.076 24.744L23.076 23.988Q24.552 23.988 25.182 23.448Q25.812 22.908 25.812 21.396L25.812 0.875998Q25.812 -0.743999 25.236 -1.518Q24.66 -2.292 23.076 -2.292L23.076 -3.048Q24.228 -2.94 25.308 -2.94Q26.352 -2.94 27.306 -3.066Q28.26 -3.192 29.052 -3.444ZM21.312 -0.744001Q21.168 0.624001 21.114 1.902Q21.06 3.18 21.06 3.864Q21.06 4.728 21.096 5.484Q21.132 6.24 21.168 6.816L20.34 6.816Q20.088 4.296 19.656 2.838Q19.224 1.38 18.144 0.731998Q17.064 0.0839996 14.796 0.0839977L12.852 0.0839977L12.852 20.568Q12.852 22.008 13.122 22.728Q13.392 23.448 14.184 23.7Q14.976 23.952 16.488 24.024L16.488 24.744Q15.552 24.672 14.112 24.654Q12.672 24.636 11.196 24.636Q9.576 24.636 8.154 24.654Q6.732 24.672 5.868 24.744L5.868 24.024Q7.38 23.952 8.172 23.7Q8.964 23.448 9.234 22.728Q9.504 22.008 9.504 20.568L9.504 0.0839977L7.56 0.0839977Q5.328 0.0839977 4.23 0.731998Q3.132 1.38 2.7 2.838Q2.268 4.296 2.016 6.816L1.188 6.816Q1.26 6.24 1.278 5.484Q1.296 4.728 1.296 3.864Q1.296 3.18 1.242 1.902Q1.188 0.624001 1.044 -0.744001Q2.556 -0.708 4.338 -0.672001Q6.12 -0.636002 7.92 -0.636002L14.454 -0.636002Q16.236 -0.636002 18.036 -0.672001Q19.836 -0.708 21.312 -0.744001ZM58.266 7.626Q56.484 5.7 53.316 5.7Q50.868 5.7 49.032 6.942Q47.196 8.184 46.188 10.47Q45.18 12.756 45.18 15.924Q45.18 18.66 46.17 20.766Q47.16 22.872 49.014 24.06Q50.868 25.248 53.46 25.248Q55.26 25.248 56.628 24.546Q57.996 23.844 58.896 22.728Q59.796 21.612 60.192 20.424L59.472 20.136Q58.536 22.152 57.168 22.944Q55.8 23.736 54.18 23.736Q52.812 23.736 51.534 22.818Q50.256 21.9 49.464 20.136Q48.672 18.372 48.672 15.924Q48.672 15.276 48.708 14.628Q48.7381 14.0863 48.7934 13.62L60.048 13.62Q60.048 9.552 58.266 7.626ZM48.7362 12.936L56.592 12.936Q56.664 11.172 56.304 9.678Q55.944 8.184 55.17 7.284Q54.396 6.384 53.172 6.384Q51.516 6.384 50.238 8.04Q49.0248 9.61205 48.7362 12.936Z' />
      </g>
      <g id='W' fill='#FFFFFF' transform='translate(0 15)'>
        <path d='M130.608 45.024L130.608 47.904Q127.872 48.48 124.56 51.144Q121.248 53.808 119.232 60.432L92.016 147.696Q91.728 147.696 91.44 147.696Q91.152 147.696 90.864 147.696Q90.576 147.696 90.288 147.696Q90 147.696 89.712 147.696L59.184 57.12Q57.312 51.504 55.008 49.776Q52.704 48.048 50.688 47.904L50.688 45.024Q53.28 45.168 57.168 45.312Q61.056 45.456 64.656 45.456Q70.272 45.456 75.168 45.312Q80.064 45.168 83.088 45.024L83.088 47.904Q78.768 48.048 76.248 48.768Q73.728 49.488 73.368 51.936Q73.008 54.384 74.736 60L96.192 126.384L94.176 128.112L113.184 68.352Q115.776 60.432 115.56 56.04Q115.344 51.648 112.32 49.848Q109.296 48.048 103.248 47.904L103.248 45.024Q107.424 45.168 111.744 45.312Q116.064 45.456 119.808 45.456Q123.552 45.456 126 45.312Q128.448 45.168 130.608 45.024ZM29.952 45.024L29.952 47.904Q26.208 48.192 24.552 49.344Q22.896 50.496 22.968 53.016Q23.04 55.536 24.48 60L46.8 128.112L43.2 131.712L63.36 67.344L65.52 70.8L41.76 147.696Q41.472 147.696 41.184 147.696Q40.896 147.696 40.608 147.696Q40.32 147.696 40.032 147.696Q39.744 147.696 39.456 147.696L8.928 57.12Q7.056 51.504 4.176 49.776Q1.296 48.048 -1.008 47.904L-1.008 45.024Q1.872 45.168 6.12 45.312Q10.368 45.456 14.4 45.456Q19.152 45.456 23.256 45.312Q27.36 45.168 29.952 45.024Z' />
      </g>
      <g id='D' fill='#FFFFFF' transform='translate(113 73)'>
        <path d='M45.36 45.024Q71.136 45.024 83.664 57.912Q96.192 70.8 96.192 94.848Q96.192 110.544 90.072 122.28Q83.952 134.016 72.288 140.496Q60.624 146.976 44.064 146.976C41.952 146.976 38.832 146.904 34.704 146.76Q28.512 146.544 23.904 146.544Q18.864 146.544 13.968 146.616Q9.072 146.688 6.048 146.976L6.048 144.096Q10.944 143.808 13.464 142.944Q15.984 142.08 16.848 139.488Q17.712 136.896 17.712 131.712L17.712 60.288Q17.712 54.96 16.848 52.44Q15.984 49.92 13.464 48.984Q10.944 48.048 6.048 47.904L6.048 45.024Q9.072 45.168 13.968 45.384Q18.864 45.6 23.616 45.456Q28.656 45.312 34.992 45.168Q41.328 45.024 45.36 45.024ZM41.76 47.616Q35.136 47.616 33.12 50.064Q31.104 52.512 31.104 60L31.104 132Q31.104 139.488 33.192 141.936Q35.28 144.384 41.904 144.384Q57.6 144.384 66.24 138.696Q74.88 133.008 78.336 122.064Q81.792 111.12 81.792 95.424Q81.792 71.232 72.936 59.424Q64.08 47.616 41.76 47.616Z' />
      </g>
    </svg>
  )

  return (
    <PageContainer>
      <Container id='animationPopUp'>
        <div className='spinningCircles'>
          <div className='circle elementTop'></div>
          <div className='circle elementRight'></div>
          <div className='circle elementBottom'></div>
          <div className='circle elementLeft'></div>
        </div>

        <div className='spinningCircles1'>
          <div className='circle elementTop'></div>
          <div className='circle elementRight'></div>
          <div className='circle elementBottom'></div>
          <div className='circle elementLeft'></div>
        </div>
        <div className='content'>{Logo()}</div>
      </Container>
    </PageContainer>
  )
}

const PageContainer = styled.div\`
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80');
  background-size: cover;
\`

const Container = styled.div\`
  position: fixed;
  top: 0%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  transition: all ease-in-out 1s;
  background-color: black;
  z-index: 9999;
  animation-name: hideLoadingPage;
  animation-duration: 7s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
      opacity: 1;
      width: 250px;
      max-width: 300px;
      padding: 1rem;
      height: 100%;
      animation-name: logoAnimateIn;
      animation-duration: 5s;
    }
  }

  .title {
    position: absolute;
    transform: translate(-50%, 0px);
    bottom: 3vh;
    left: 50%;
    width: 100%;
    text-align: center;
  }

  .spinningCircles {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    width: 300px;
    height: 300px;
    border: solid 1px gold;
    border-radius: 1000px;
    transform-origin: center;
    animation-name: rotateElement;
    animation-duration: 8s;
  }

  .spinningCircles1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    width: 300px;
    height: 300px;
    border: solid 1px gold;
    border-radius: 1000px;
    transform-origin: center;
    animation-name: rotateElement1;
    animation-duration: 12s;
  }

  .circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 1000px;
    background: gold;
  }

  .elementTop {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .elementRight {
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
  .elementBottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  .elementLeft {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 600px) {
  }

  @keyframes hideLoadingPage {
    0% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }

    95% {
      opacity: 0;
      top: 0vh;
    }

    100% {
      opacity: 0;
      top: 200vh;
    }
  }

  @keyframes rotateElement {
    from {
      transform: translate(-50%, -50%) rotate3d(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate3d(1, 1, 1, 720deg);
    }
  }

  @keyframes rotateElement1 {
    from {
      transform: translate(-50%, -50%) rotate3d(45deg);
    }

    to {
      transform: translate(-50%, -50%) rotate3d(1, 1, 1, 1080deg);
    }
  }

  @keyframes logoAnimateIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
\`
`
