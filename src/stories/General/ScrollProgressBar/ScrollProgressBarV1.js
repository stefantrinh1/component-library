import React, { useEffect } from 'react'
import { Flex } from '@theme-ui/components'

export default function ScrollProgressBarV1(props) {
  const { variantName, options } = props
  const { containerStyles } = options

  const styles = containerStyles ? JSON.parse(containerStyles) : {}

  useEffect(() => {
    const handleScroll = () => {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      var scrolled = (winScroll / height) * 100
      document.getElementById('myBar').style.width = scrolled + '%'
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll) // removed the event listerner as routing to different without the lement will break it.
    }

    return () => {}
  }, [])

  return (
    <Flex
      variant={`${variantName}.progressContainer`}
      className='progressContainer'
      sx={{
        ...styles,
      }}>
      <Flex
        variant={`${variantName}.progressBarContainer`}
        className='progressBarContainer'>
        <Flex
          variant={`${variantName}.progressBar`}
          className='progressBar'
          id='myBar'></Flex>
      </Flex>
    </Flex>
  )
}
