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
      <svg width={300} height={200}>
        <rect x={0} y={0} width={50} height={50} fill='red'>
          {/* rect 元素的 scale 执行动画，从 1 1，放大至 2 2， 用时3秒， 无线循环  */}
          <animateTransform
            attributeName='transform'
            type='scale'
            from='1 1'
            to='2, 2'
            dur='3s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>

      <svg width={300} height={200}>
        <rect x={0} y={0} width={50} height={50} fill='green'>
          {/* rect 元素的 scale 执行动画，从 1 1，缩小至 1 0.5， 用时3秒， 无线循环  */}
          <animateTransform
            attributeName='transform'
            type='scale'
            values='1, 1; 1 0.5'
            dur='3s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>
    </DemoBox>
  )
})

export default Demo