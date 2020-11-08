import React from 'react'
import ContentBlock from './ContentBlock2'

export default {
  title: 'ContentBlocks/ContentBlock2',
  component: ContentBlock,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
}

const Template = (args) => <ContentBlock {...args} />

export const V1 = Template.bind({})
export const V2 = Template.bind({})
export const V3 = Template.bind({})

V1.args = {
  backgroundImage:
    'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  backgroundColor: '',
  textColor: 'white',
  title: 'A Memo To Remember',
  subtitle: 'Stars Will Light The Sky',
  text:
    'A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.',
  buttonName: 'Learn More',
  buttonLink: '/',
}

V2.args = {
  backgroundImage: '',
  backgroundColor: '',
  textColor: 'black',
  title: 'A Memo To Remember: Stars Will Light The Sky',
  subtitle: '',
  text:
    'A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.',
  buttonName: '',
  buttonLink: '',
}

V3.args = {
  backgroundImage: '',
  backgroundColor: 'lightblue',
  textColor: 'black',
  title: 'A Memo To Remember: Stars Will Light The Sky',
  subtitle: '',
  text:
    'A Unforgetable Experience, See the Nothern Lights appear right before your eyes. Ingest a once in lifetime experience and see a list of our tours.',
  buttonName: '',
  buttonLink: '',
}
