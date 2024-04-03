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
        {/* 描边 */}
        <rect x={0} y={0} width={100} height={50} fill='transparent' stroke='red' />

        {/* 描边透明度 */}
        <rect x={100} y={100} width={100} height={50} fill='transparent' stroke='blue' strokeWidth={5} strokeOpacity={0.2} />

        {/* 描边线段两端端点样式：strokeLinecap: butt[*] | round | square */}
        <line x1={100} y1={200} x2={200} y2={200} stroke='pink' strokeWidth={5} strokeLinecap='round' />
        {/* 描边线段两条线的连接处的样式：strokeLinejoin: miter[*] | round | bevel */}
        <polyline points='100 220, 150 250, 200 220' fill='transparent' stroke='pink' strokeWidth={10} strokeLinejoin='round' />

        {/* 描边线段设置为虚线：strokeDasharray: [实现长度，虚线长度] */}
        <polyline points='100 270, 200 270' fill='transparent' stroke='pink' strokeWidth={10} strokeDasharray={[10, 5]} />
        {/* 描边线段的偏移量：strokeDashOffset: number */}
        <polyline points='100 290, 200 290' fill='transparent' stroke='pink' strokeWidth={10} strokeDasharray={[10, 5]} strokeDashoffset={10} />
      </svg>
    </DemoBox>
  )
})

export default Demo