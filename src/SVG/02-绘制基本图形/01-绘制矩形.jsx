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
        <rect x={100} y={100} width={100} height={100} rx={10} ry={10} fill='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo