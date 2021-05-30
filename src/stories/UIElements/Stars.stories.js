import React from 'react'
import Stars from './Stars'
import Documentation from './StarsDocumentation'

export default {
  title: 'UIElements/Stars',
  component: Stars,
  argTypes: {
    starColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: Documentation,
    },
  },
}

const Template = args => <Stars {...args} />

export const V1 = Template.bind({})
// export const V2 = Template.bind({})

V1.args = {
  starColor: 'red',
}

// V2.args = {
//   images: [
//     'https://images.pexels.com/photos/1755735/pexels-photo-1755735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     'https://images.pexels.com/photos/5429891/pexels-photo-5429891.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
//   ],
//   title: 'A Memo To Remember',
//   subtitle: 'Stars Will Light The Sky',
//   text: 'A Unforgetable Experience',
//   buttonName: 'Learn More',
//   buttonLink: '/',
//   swapPosition: true,
//   backgroundColor: 'darkgreen',
//   textColor: 'white',
// }
