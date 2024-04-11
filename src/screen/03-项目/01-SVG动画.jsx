import React, { memo } from 'react'
import styled from 'styled-components'
import { useScalePage } from '@/hooks/useScalePage'
import CenterSvg from './center'

const DemoBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(255, 255, 0, 0.1);

  .center {
    position: absolute;
    right: 540px;
    bottom: 272px;
    width: 823px;
    height: 710px;
    /* background: rgba(255, 0, 0, 0.1); */
  }
`

const Demo = memo(() => {
  useScalePage()

  return (
    <DemoBox>
      <div className="center">
        <CenterSvg />
      </div>
    </DemoBox>
  )
})

export default Demo