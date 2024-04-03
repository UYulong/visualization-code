import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  svg {
    background-color: rgba(255, 0, 0, 0.1);
  }

  color: pink;
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <svg width={300} height={300}>
        {/* 填充 */}
        <rect x={0} y={0} width={100} height={50} fill='red' />

        {/* 填充透明度 */}
        <rect x={100} y={100} width={100} height={50} fillOpacity={0.5} />

        {/* 继承父元素的颜色 */}
        <rect x={200} y={200} width={100} height={50} fill='currentColor' />
      </svg>
    </DemoBox>
  )
})

export default Demo