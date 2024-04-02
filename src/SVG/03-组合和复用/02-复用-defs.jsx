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
          <rect id="rectangle" x="0" y="0" width="100" height="50" />

          <g id='logo' fill='transparent' stroke='red'>
            <circle cx="50" cy="50" r="25" />
            <circle cx="80" cy="50" r="25" />
            <circle cx="110" cy="50" r="25" />
            <circle cx="140" cy="50" r="25" />
          </g>
        </defs>

        <use href='#logo' />
        <use href='#rectangle' x={100} y={100} />
      </svg>
    </DemoBox>
  )
})

export default Demo