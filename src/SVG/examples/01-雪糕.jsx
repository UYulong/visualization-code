import React, { memo, useEffect } from 'react'
import styled from 'styled-components'

import { getPathLength } from './utils'

const DemoBox = styled.div`
  .outline {
    stroke-dasharray: 1020px;
    stroke-dashoffset: 1020px;
    animation: lineMove 2s linear forwards;
  }

  .stick {
    stroke-dasharray: 800px;
    stroke-dashoffset: 800px;
    animation: lineMove 2s linear forwards;
    animation-delay: 1.75s;
  }

  .drop {
    stroke-dasharray: 200px;
    stroke-dashoffset: 200px;
    animation: lineMove 2s linear forwards;
    animation-delay: 2.5s;
  }

  .inside-l {
    stroke-dasharray: 800px;
    stroke-dashoffset: 800px;
    animation: lineMove 2s linear forwards;
    animation-delay: 1s;
  }

  .inside-r {
    stroke-dasharray: 700px;
    stroke-dashoffset: 700px;
    animation: lineMove 2s linear forwards;
    animation-delay: 1s;
  }


  @keyframes lineMove {
    100% {
      stroke-dashoffset: 0;
    }
  }
`

const Demo = memo(() => {

  useEffect(() => {
    getPathLength("stick"); // 252px
    getPathLength("drop"); // 36
    getPathLength("outline"); // 1019
    getPathLength("inside-l"); // 486
    getPathLength("inside-r"); // 486
  }, [])

  return (
    <DemoBox>
      <svg
        id="popsicle"
        width="300"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 177.3 449.1"
      >
        <g stroke="black" strokeWidth="5px">
          {/* 手柄 */}
          <path
            className="stick"
            d="M408.8,395.9V502.4a18.8,18.8,0,0,1-18.8,18.8h0a18.8,18.8,0,0,1-18.8-18.8V415.3"
            transform="translate(-301.2 -73.5)"
            fill="none"
          />

          {/* 水滴 */}
          <path
            className="drop"
            d="M359.1,453.5c0,3.1-2.1,5.6-4.7,5.6s-4.7-2.5-4.7-5.6,2.1-8.3,4.7-8.3S359.1,450.4,359.1,453.5Z"
            transform="translate(-301.2 -73.5)"
            fill="none"
          />

          {/* 外层 */}
          <path
            className="outline"
            d="M389.9,75h0a87.4,87.4,0,0,0-87.2,87.2v218a15.7,15.7,0,0,0,15.7,15.7h12a4.3,4.3,0,0,1,4.1,4.8h0.1v17c0,8.2,9.1,7.9,9.1,0v-6c0-5.2,5.8-5.2,5.8,0v20.5c0,7.7,9.8,7.7,9.8,0V407.2c0-5.2,6.4-5.2,6.4,0v2.7c0,7.7,8.8,7.7,8.8,0v-6c0-6.4,3.9-7.8,6-8.1h80.9a15.7,15.7,0,0,0,15.7-15.7v-218A87.4,87.4,0,0,0,389.9,75Z"
            transform="translate(-301.2 -73.5)"
            fill="none"
          />

          {/* 里面左边 */}
          <path
            className="inside-l"
            d="M55.5,68h0A20.2,20.2,0,0,1,75.7,88.2V276.9a4.5,4.5,0,0,1-4.5,4.5H39.8a4.5,4.5,0,0,1-4.5-4.5V88.2A20.2,20.2,0,0,1,55.5,68Z"
            fill="none"
          />

          {/* 里面左边 */}
          <path
            className="inside-r"
            d="M121.8,68h0A20.2,20.2,0,0,1,142,88.2V277a4.4,4.4,0,0,1-4.4,4.4H106.1a4.4,4.4,0,0,1-4.4-4.4V88.2A20.2,20.2,0,0,1,121.8,68Z"
            fill="none"
          />
        </g>
      </svg>
    </DemoBox>
  )
})

export default Demo