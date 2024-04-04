
import React, { memo } from 'react'
import styled from 'styled-components'

import avatarImage from '../images/avatar.jpeg'

const DemoBox = styled.div`
  
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <svg width={200} height={200}>
        <defs>
          <filter id='f1'>
            <feGaussianBlur stdDeviation={8} />
          </filter>
        </defs>

        <image href={avatarImage} filter='url(#f1)' />
      </svg>
    </DemoBox>
  )
})

export default Demo