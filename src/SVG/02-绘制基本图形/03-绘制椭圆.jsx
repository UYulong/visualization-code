import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  svg {
    background-color: rgba(255, 0, 0, 0.1);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <svg width={300} height={300}>
        <ellipse cx={100} cy={100} rx={50} ry={25} fill='red' />
        <ellipse cx={200} cy={200} rx={50} ry={25} fill='transparent' stroke='blue' />
      </svg>
    </DemoBox>
  )
})

export default Demo