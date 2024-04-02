import React, { memo } from 'react'
import styled from 'styled-components'

import GoogleImage from '../images/googlelogo_color_92x30dp.png'

const DemoBox = styled.div`
  svg {
    background-color: rgba(255, 0, 0, 0.1);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      {/* 绘制 图片 */}
      <svg width={300} height={300}>
        <image href={GoogleImage} x={100} y={100} />
      </svg>
    </DemoBox>
  )
})

export default Demo