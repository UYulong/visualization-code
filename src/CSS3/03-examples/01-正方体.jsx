import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: rgba(150, 100, 200, 0.4);

  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(45deg);

  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .top {
    background-color: rgba(255, 0, 0, 0.4);
    transform: rotateX(90deg) translateZ(50px);
  }

  .bottom {
    background-color: rgba(0, 255, 0, 0.4);
    transform: rotateX(-90deg) translateZ(50px);
  }

  .left {
    background-color: rgba(255, 255, 0, 0.4);
    transform: rotateY(-90deg) translateZ(50px);
  }

  .right {
    background-color: rgba(0, 0, 255, 0.4);
    transform: rotateY(90deg) translateZ(50px);
  }

  .front {
    background-color: rgba(100, 100, 100, 0.4);
    transform: translateZ(50px);
  }

  .back {
    background-color: rgba(0, 255, 255, 0.4);
    transform: translateZ(-50px);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>Demo
      <div className="item top">top</div>
      <div className="item bottom">bottom</div>
      <div className="item left">left</div>
      <div className="item right">right</div>
      <div className="item front">front</div>
      <div className="item back">back</div>
    </DemoBox>
  )
})

export default Demo