import React from 'react'

import TitleBlock from './TitleBlock1'

export default {
  title: 'TitleBlocks/TitleBlock1',
  component: TitleBlock,
  argTypes: {
    swapPosition: { control: 'boolean' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <TitleBlock {...args} />

export const V1 = Template.bind({})
export const V2 = Template.bind({})

V1.args = {
  images: [
    'https://images.pexels.com/photos/1755735/pexels-photo-1755735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5429891/pexels-photo-5429891.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  ],
  title: 'A Memo To Remember',
  subtitle: 'Stars Will Light The Sky',
  text: 'A Unforgetable Experience',
  buttonName: 'Learn More',
  buttonLink: '/',
  swapPosition: false,
}

V2.args = {
  images: [
    'https://images.pexels.com/photos/1755735/pexels-photo-1755735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5429891/pexels-photo-5429891.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  ],
  title: 'A Memo To Remember',
  subtitle: 'Stars Will Light The Sky',
  text: 'A Unforgetable Experience',
  buttonName: 'Learn More',
  buttonLink: '/',
  swapPosition: true,
  backgroundColor: 'darkgreen',
  textColor: 'white',
}
