import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: cyan;

  transform: rotate(45deg);
  transform-origin: bottom left;
`

const Demo = memo(() => {
  return (
    <DemoBox>Demo</DemoBox>
  )
})

export default Demo