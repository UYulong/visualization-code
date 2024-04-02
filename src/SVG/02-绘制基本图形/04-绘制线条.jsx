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
        <line x1={100} y1={100} x2={200} y2={100} stroke='red' strokeWidth={5} />
      </svg>
    </DemoBox>
  )
})

export default Demo