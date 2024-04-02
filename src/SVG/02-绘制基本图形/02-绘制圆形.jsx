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
        <circle cx={100} cy={100} r={50} fill='cyan' />
        <circle cx={200} cy={200} r={50} fill='transparent' stroke='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo