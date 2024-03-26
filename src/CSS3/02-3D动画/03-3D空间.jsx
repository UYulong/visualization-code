import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  background-color: aliceblue;

  transform-style: preserve-3d;
  perspective: 300px;

  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: lightblue;

    transform: rotateX(70deg) translateX(50px);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <div className="item">item</div>
    </DemoBox>
  )
})

export default Demo