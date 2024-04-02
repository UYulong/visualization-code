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
        {/* 组合 */}
        <g id='circle' fill='transparent' stroke='red'>
          <circle cx={80} cy={80} r={25} />
          <circle cx={110} cy={80} r={25} />
          <circle cx={140} cy={80} r={25} />
          <circle cx={170} cy={80} r={25} />
        </g>

        {/* 复用 */}
        <use href='#circle' x={100} y={100} width={100} />
      </svg>
    </DemoBox>
  )
})

export default Demo