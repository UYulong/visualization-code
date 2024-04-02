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
      {/* polygon 默认填充黑色， 会自动闭合路径 */}
      <svg width={300} height={300}>
        <polygon points='100 100, 200 150, 100 200, 0 150' fill='transparent' stroke='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo