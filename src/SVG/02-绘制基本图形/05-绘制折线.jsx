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
      {/* polyline 默认会填充黑色，但是不会自动闭合路径 */}
      <svg width={300} height={300}>
        <polyline points='100 100, 200, 200, 100 200' fill='transparent' stroke='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo