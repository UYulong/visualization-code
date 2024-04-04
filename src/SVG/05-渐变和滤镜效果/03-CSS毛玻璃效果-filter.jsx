
import React, { memo } from 'react'
import styled from 'styled-components'

import avatarImg from '../images/avatar.jpeg'

const DemoBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;

  img {
    filter: blur(8px)
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <img src={avatarImg} />
    </DemoBox>
  )
})

export default Demo