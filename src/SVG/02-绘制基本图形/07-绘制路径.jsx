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
      {/* d: 路径集合 M: moveTo L: lineTo Z: closePath*/}
      <svg width={300} height={300}>
        <path d='M 100 100, 200 100, 200 200, 100 250, Z' fill='transparent' stroke='red' strokeWidth={5} />
      </svg>
    </DemoBox>
  )
})

export default Demo