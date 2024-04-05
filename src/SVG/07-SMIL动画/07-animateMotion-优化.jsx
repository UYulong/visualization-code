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
        <path
          id='path'
          d='M 0 150, L 100 100, L 200 150, L 300 100'
          fill='transparent'
          stroke='red'
          strokeWidth={5}
        />

        <rect id='rect' x={-10} y={-5} rx={2} ry={1} width={20} height={10} fill='red' />

        <animateMotion href='#rect' dur='5s' rotate='auto' repeatCount='indefinite'>
          <mpath href='#path' />
        </animateMotion>

      </svg>
    </DemoBox>
  )
})

export default Demo