import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  width: 200px;
  height: 100px;
  background: cyan;

  transform: rotate(45deg) translateX(100px);
`

const Demo = memo(() => {
  return (
    <DemoBox>
      box
    </DemoBox>
  )
})

export default Demo