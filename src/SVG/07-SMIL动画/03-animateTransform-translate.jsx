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
        <rect x={0} y={0} width={100} height={50} fill='red'>
          {/* rect 元素的translate执行动画，从 0，0 过度到 200，0 用时3秒， 无线循环  */}
          <animateTransform
            attributeName='transform'
            type='translate'
            from='0, 0'
            to='200, 0'
            dur='3s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>

      <svg width={300} height={200}>
        <rect x={0} y={0} width={100} height={50} fill='green'>
          {/* rect 元素的translate执行动画，从 0，0 过度到 200，0 用时3秒， 无线循环  */}
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0, 0 ;200, 0'
            dur='3s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>
    </DemoBox>
  )
})

export default Demo