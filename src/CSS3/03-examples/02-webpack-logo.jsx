import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2b3a42;

  display: flex;
  justify-content: center;
  align-items: center;
  

  .stage {
    width: 100%;
    height: 200px;
    position: relative;
  }

  ul, li {
    list-style: none;
  }

  .inner-boxs {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;

    width: 50px;
    height: 50px;

    transform-style: preserve-3d;
    transform: rotateX(-33.5deg) rotateY(45deg);
    animation: inner-loop 6s ease-in-out infinite;

    @keyframes inner-loop {
      0% {
        transform: rotateX(-33.5deg) rotateY(45deg);
      }

      50%, 100% {
        transform: rotateX(-33.5deg) rotateY(-315deg);
      }
    }

    .item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #175d96;
      border: 1px solid white;
    }

    .top {  
      transform: rotateX(90deg) translateZ(25px);
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(25px);
    }

    .left {
      transform: rotateY(-90deg) translateZ(25px);
    }

    .right {
      transform: rotateY(90deg) translateZ(25px);
    }

    .front {
      transform: translateZ(25px);
    }

    .back {
      transform: translateZ(-25px);
    }
  }

  .outer-boxs {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;

    width: 100px;
    height: 100px;

    transform-style: preserve-3d;
    transform: rotateX(-33.5deg) rotateY(45deg);
    animation: outer-loop 6s ease-in-out infinite;

    @keyframes outer-loop {
      0% {
        transform: rotateX(-33.5deg) rotateY(45deg);
      }

      50%, 100% {
        transform: rotateX(-33.5deg) rotateY(405deg);
      }
    }

    .item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(141, 214, 249, 0.5);
      border: 1px solid white;
    }

    .top {  
      transform: rotateX(90deg) translateZ(50px);
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(50px);
    }

    .left {
      transform: rotateY(-90deg) translateZ(50px);
    }

    .right {
      transform: rotateY(90deg) translateZ(50px);
    }

    .front {
      transform: translateZ(50px);
    }

    .back {
      transform: translateZ(-50px);
    }
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <div className="stage">
        {/* 内部盒子 */}
        <ul className="inner-boxs">
          <li className='item top'></li>
          <li className='item bottom'></li>
          <li className='item left'></li>
          <li className='item right'></li>
          <li className='item front'></li>
          <li className='item back'></li>
        </ul>

        {/* 外部盒子 */}
        <ul className="outer-boxs">
          <li className='item top'></li>
          <li className='item bottom'></li>
          <li className='item left'></li>
          <li className='item right'></li>
          <li className='item front'></li>
          <li className='item back'></li>
        </ul>
      </div>
    </DemoBox>
  )
})

export default Demo