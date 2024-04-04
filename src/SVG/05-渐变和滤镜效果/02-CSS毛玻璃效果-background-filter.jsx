
import React, { memo } from 'react'
import styled from 'styled-components'

import avatarImg from '../images/avatar.jpeg'

const DemoBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  .avatar-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;

    background-color: transparent;
    backdrop-filter: blur(8px);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <img src={avatarImg} />
      <div className='avatar-cover' />
    </DemoBox>
  )
})

export default Demo