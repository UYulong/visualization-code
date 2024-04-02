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
      {/* 绘制 文字： textAnchor: start[*] | end | middle | inherit */}
      {/* 绘制 文字：dominantBaseline: auto[*] | middle | hanging  */}
      {/* tspan 文本子元素 */}
      <svg width={300} height={300}>
        <text x={100} y={100} fontSize={30} textAnchor='middle' dominantBaseline='middle' fill='orange'>
          牛马
          <tspan fill='red'>就是</tspan>
          <tspan fill='transparent' stroke='green'>牛</tspan>
        </text>
      </svg>
    </DemoBox>
  )
})

export default Demo