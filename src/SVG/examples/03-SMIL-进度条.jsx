import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e74c3c;

  svg {
    margin: 40px;
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      {/* 音频动画 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="100"
        viewBox="0 0 80 100"
      >
        {/* line1 */}
        <rect
          fill="#fff"
          width="3"
          height="100"
          transform="rotate(180,3,50)"
        >
          <animate attributeName='height' values='30; 100; 30' dur='1s' repeatCount='indefinite' />
        </rect>

        {/* line2 */}
        <rect
          x="17"
          fill="#fff"
          width="3"
          height="100"
          transform="rotate(180 20 50)"
        >
          <animate attributeName='height' values='30; 100; 30' dur='1s' begin='0.1s' repeatCount='indefinite' />
        </rect>

        {/* line3 */}
        <rect
          x="40"
          fill="#fff"
          width="3"
          height="100"
          transform="rotate(180,40,50)"
        >
          <animate attributeName='height' values='30; 100; 30' dur='1s' begin='0.2s' repeatCount='indefinite' />
        </rect>

        {/* line4 */}
        <rect
          x="60"
          fill="#fff"
          width="3"
          height="100"
          transform="rotate(180 58 50)"
        >
          <animate attributeName='height' values='30; 100; 30' dur='1s' begin='0.3s' repeatCount='indefinite' />
        </rect>

        {/* line5 */}
        <rect
          x="80"
          fill="#fff"
          width="3"
          height="100"
          transform="translate(0) rotate(180 76 50)"
        >
          <animate attributeName='height' values='30; 100; 30' dur='1s' begin='0.4s' repeatCount='indefinite' />
        </rect>
      </svg>

      {/* 进度条 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animate attributeName='opacity' values='0; 1; 0' dur='1s' repeatCount='indefinite' />
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
          <animate attributeName='opacity' values='0; 1; 0' dur='1s' begin='0.2s' repeatCount='indefinite' />
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
          <animate attributeName='opacity' values='0; 1; 0' dur='1s' begin='0.4s' repeatCount='indefinite' />
        </circle>
      </svg>

      {/* 旋转进度条 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        {/* big circle */}
        <circle
          fill="none"
          stroke="#fff"
          stroke-width="6"
          stroke-miterlimit="15"
          stroke-dasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform attributeName='transform' type='rotate' values='0, 50, 50; 360, 50, 50' dur='5s' repeatCount='indefinite' />
        </circle>

        {/* small circle */}
        <circle
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-miterlimit="10"
          stroke-dasharray="10,10"
          cx="50"
          cy="50"
          r="39"
        >
          <animateTransform attributeName='transform' type='rotate' values='0, 50, 50; -360, 50, 50' dur='5s' repeatCount='indefinite' />
        </circle>

        {/* rect */}
        <g fill="#fff">
          <rect x="30" y="35" width="5" height="30">
            <animateTransform attributeName='transform' type='translate' values='0, -5; 0, 5; 0, -5' dur='1s' repeatCount='indefinite' />
          </rect>
          <rect x="40" y="35" width="5" height="30">
            <animateTransform attributeName='transform' type='translate' values='0, -5; 0, 5; 0, -5' dur='1s' begin='0.1s' repeatCount='indefinite' />
          </rect>
          <rect x="50" y="35" width="5" height="30">
            <animateTransform attributeName='transform' type='translate' values='0, -5; 0, 5; 0, -5' dur='1s' begin='0.2s' repeatCount='indefinite' />
          </rect>
          <rect x="60" y="35" width="5" height="30">
            <animateTransform attributeName='transform' type='translate' values='0, -5; 0, 5; 0, -5' dur='1s' begin='0.3s' repeatCount='indefinite' />
          </rect>
          <rect x="70" y="35" width="5" height="30">
            <animateTransform attributeName='transform' type='translate' values='0, -5; 0, 5; 0, -5' dur='1s' begin='0.4s' repeatCount='indefinite' />

          </rect>
        </g>
      </svg>
    </DemoBox>
  )
})

export default Demo