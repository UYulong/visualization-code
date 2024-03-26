import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  width: 200px;
  height: 100px;
  background: rgba(255, 0, 0, .1);

  perspective: 200px;

  
  /* transform: rotateX(-33.5deg) rotateY(45deg); */

  .item {
    width: inherit;
    height: inherit;
    background-color: cyan;
    transform: rotate3d(0, 1, 0, 45deg);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <div className="item">
        Demo
      </div>
    </DemoBox>
  )
})

export default Demo