
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
        <defs>
          {/* 默认渐变 从左到右 */}
          <linearGradient id='g1'>
            <stop offset='0%' stopColor='red' />
            <stop offset='50%' stopColor='blue' />
            <stop offset='100%' stopColor='green' />
          </linearGradient>

          {/* 从上到下 */}
          <linearGradient id='g2' x1={0} y1={0} x2={0} y2={1}>
            <stop offset='0%' stopColor='red' />
            <stop offset='50%' stopColor='blue' />
            <stop offset='100%' stopColor='green' />
          </linearGradient>
        </defs>


        <rect x={0} y={0} width={100} height={100} fill='url(#g1)' />
        <rect x={100} y={100} width={100} height={100} fill='url(#g2)' />
      </svg>
    </DemoBox>
  )
})

export default Demo