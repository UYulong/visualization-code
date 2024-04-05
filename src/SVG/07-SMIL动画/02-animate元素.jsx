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
          {/* rect 元素的X值平滑过度到 200，用时3秒， 无线循环  */}
          <animate attributeName='x' from={0} to={200} dur='3s' repeatCount='indefinite' />
        </rect>
      </svg>

      <svg width={300} height={200}>
        <rect x={0} y={0} width={100} height={50} fill='green'>
          {/* rect 元素的X值平滑过度到 200，用时3秒，定格在做后一帧  */}
          <animate attributeName='x' from={0} to={200} dur='3s' fill='freeze' />
        </rect>
      </svg>

      <svg width={300} height={200}>
        <rect x={0} y={0} width={100} height={50} fill='blue'>
          {/* rect 元素的X值平滑过度到 200，用时3秒，然后继续开启第二个动画，Y值用时3s平滑过度到100，最终定格在做后一帧  */}
          <animate id='one' attributeName='x' values='0; 200' dur='3s' fill='freeze' />
          <animate attributeName='y' values='0; 100' dur='3s' begin='one.end' fill='freeze' />
        </rect>
      </svg>
    </DemoBox>
  )
})

export default Demo