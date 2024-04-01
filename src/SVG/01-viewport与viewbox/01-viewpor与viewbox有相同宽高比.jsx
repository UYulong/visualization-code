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
      <svg width={300} height={300} viewBox='0 0 100 100'>
        <rect x={0} y={0} width={100} height={100} />
      </svg>
    </DemoBox>
  )
})

export default Demo