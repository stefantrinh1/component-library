import React from 'react'
import LoadingPage from './LoadingPage'
import Documentation from './LoadingPageDocumentation'

export default {
  title: 'LoadingPage/Loading',
  component: LoadingPage,
  // argTypes: {
  //   // starColor: { control: 'color' },
  // },
  parameters: {
    docs: {
      page: Documentation,
    },
  },
}

const Template = args => <LoadingPage {...args} />

export const V1 = Template.bind({})
// export const V2 = Template.bind({})

V1.args = {
  // starColor: 'red',
}
