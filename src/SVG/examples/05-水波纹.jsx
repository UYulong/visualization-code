import React, { memo, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import styled from 'styled-components'


const DemoBox = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #020438;
    font: 14px/1 "Open Sans", helvetica, sans-serif;
  }

  .box {
    height: 280px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #020438;
    border-radius: 100%;
    overflow: hidden;
  }

  .box .percent {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    color: #fff;
    font-size: 64px;
  }

  .box .water {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    transform: translate(0, 50%);
    background: #4d6de3;
  }

  .box .water_wave {
    width: 200%;
    position: absolute;
    bottom: 100%;
  }

  .box .water_wave_back {
    right: 0;
    fill: #c7eeff;
  }

  .box .water_wave_front {
    left: 0;
    fill: #4d6de3;
    margin-bottom: -1px;
  }

  .water_wave_back {
    animation: moveToRight 1.7s linear infinite;
  }
  @keyframes moveToRight {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(50%);
    }
  }

  .water_wave_front {
    animation: moveToLeft 0.7s linear infinite;
  }
  @keyframes moveToLeft {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
`

const Demo = memo(() => {
  const waterBox = useRef()
  const [initVal, setInitVal] = useState(0)
  const targetValue = 65

  useEffect(() => {
    const timerId = setInterval(() => {
      if (targetValue > 100) {
        return clearInterval(timerId)
      }

      if (initVal >= targetValue) {
        clearInterval(timerId)
      } else {
        setInitVal(initVal + 1)
        waterBox.current.style.transform = `translate(0, ${100 - initVal}%)`
      }

    }, 60);

    return () => {
      clearInterval(timerId)
    }
  }, [initVal])

  return (
    <DemoBox>
      <svg
        version="1.1"
        xmlns="https://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        style={{ display: 'none' }}
      >
        <symbol id="wave">
          <path
            d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
          />
          <path
            d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
          />
          <path
            d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
          />
          <path
            d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
          />
        </symbol>
      </svg>

      <div className="box">
        <div className="percent">
          <div className="percentNum" id="count">{initVal}</div>
          <div className="percentB">%</div>
        </div>

        <div id="water" className="water" ref={waterBox}>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use href="#wave" />
          </svg>

          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use href="#wave" />
          </svg>
        </div>
      </div>
    </DemoBox>
  )
})

export default Demo