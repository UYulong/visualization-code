import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: cyan;

  /* transform: rotate3d(0, 1, 0, 45deg); */
  transform: rotateX(-33.5deg) rotateY(45deg);
`

const Demo = memo(() => {
  return (
    <DemoBox>Demo</DemoBox>
  )
})

export default Demo