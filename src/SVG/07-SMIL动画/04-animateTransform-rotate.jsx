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
          {/* rect 元素的 rotate 执行动画，从 0deg，圆心为 50，25 旋转至 -360deg 用时3秒， 无线循环  */}
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0, 50, 25'
            to='-360, 50, 25'
            dur='3s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>

      <svg width={300} height={200}>
        <rect x={0} y={0} width={100} height={50} fill='green'>
          {/* rect 元素的 rotate 执行动画，从 0deg，圆心为 50，25 旋转至 -360deg 用时3秒， 无线循环  */}
          <animateTransform
            attributeName='transform'
            type='rotate'
            values='0, 50, 25 ; 360, 50, 25'
            dur='3s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>
    </DemoBox>
  )
})

export default Demo