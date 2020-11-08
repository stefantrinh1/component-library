import React from 'react'

import ContentBlock from './ContentBlock7'

export default {
  title: 'ContentBlocks/ContentBlock7',
  component: ContentBlock,
  argTypes: {
    swapPosition: { control: 'boolean' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ContentBlock {...args} />

export const V1 = Template.bind({})
export const V2 = Template.bind({})

V1.args = {
  images: [
    'https://images.pexels.com/photos/1755735/pexels-photo-1755735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5429891/pexels-photo-5429891.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  ],
  title: 'A Memo To Remember',
  subtitle: 'Stars Will Light The Sky',
  text:
    'A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.',
  buttonName: 'Learn More',
  buttonLink: '/',
  backgroundColor: 'lightgrey',
  swapPosition: false,
}

V2.args = {
  images: [
    'https://images.pexels.com/photos/1755735/pexels-photo-1755735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5429891/pexels-photo-5429891.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  ],
  title: 'A Memo To Remember',
  subtitle: 'Stars Will Light The Sky',
  text:
    'A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.',
  buttonName: 'Learn More',
  buttonLink: '/',
  swapPosition: true,
  backgroundColor: 'black',
  textColor: 'white',
}
