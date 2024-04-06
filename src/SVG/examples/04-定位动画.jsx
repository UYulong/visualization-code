import React, { memo } from 'react'
import styled from 'styled-components'

import bgImg from './images/bg-location.png'
import loc1Img from './images/redPoint.png'
import loc2Img from "./images/smPoint.png"
import loc3Img from "./images/smPoint.png"
import bgRedImg from './images/bg-red.png'
import fristBg from './images/first-smbg.png'

const DemoBox = styled.div`
  width: 600px;
  height: 314px;
  background: url(${bgImg});
  background-size: 100% 100%;

  #loc1 {
    animation: moveLoc1 1s linear infinite alternate;
  }
  @keyframes moveLoc1 {
    0% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  #loc2, #loc3 {
    animation: moveLoc23 1s linear infinite alternate;
  }
  @keyframes moveLoc23 {
    0% {
      transform: translateY(-15px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  #c1 {
    animation: scaleC1 1s linear infinite;
  }
  @keyframes scaleC1 {
    0% {
      rx: 0;
      ry: 0;
      opacity: 1;
    }

    100% {
      rx: 16;
      ry: 8;
      opacity: 0;
    }
  }

  #c2 {
    animation: scaleC2 1s linear infinite;
    animation-delay: 0.2s;
  }
  @keyframes scaleC2 {
    0% {
      rx: 0;
      ry: 0;
      opacity: 1;
    }

    100% {
      rx: 8;
      ry: 4;
      opacity: 0;
    }
  }

  #c3 {
    animation: scaleC1 1s linear infinite;
  }
  @keyframes scaleC1 {
    0% {
      rx: 0;
      ry: 0;
      opacity: 1;
    }

    100% {
      rx: 12;
      ry: 6;
      opacity: 0;
    }
  }

  #c4 {
    animation: scaleC2 1s linear infinite;
    animation-delay: 0.2s;
  }
  @keyframes scaleC2 {
    0% {
      rx: 0;
      ry: 0;
      opacity: 1;
    }

    100% {
      rx: 6;
      ry: 3;
      opacity: 0;
    }
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <svg
        id="location"
        height="400"
        version="1.1"
        width="744"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Snap</desc>
        <defs>
          <linearGradient
            x1="100%"
            y1="40.7087699%"
            x2="4.9797314%"
            y2="60.8683027%"
            id="linearGradient-1"
          >
            <stop stopColor="#F5533D" stopOpacity="0" offset="0%" />
            <stop stopColor="#F5533D" offset="44.5180532%" />
            <stop stopColor="#F5533D" stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>

        <image
          id="loc1"
          href={loc1Img}
          preserveAspectRatio="none"
          x="265"
          y="50.275"
          width="55"
          height="74"
        />
        <image
          id="loc2"
          href={loc2Img}
          preserveAspectRatio="none"
          x="155"
          y="69.97776888888889"
          width="25"
          height="34"
        />
        <image
          id="loc3"
          href={loc3Img}
          preserveAspectRatio="none"
          x="435"
          y="90.35983743115371"
          width="25"
          height="34"
        />
        <image
          href={bgRedImg}
          preserveAspectRatio="none"
          x="278"
          y="94"
          width="30"
          height="100"
        />
        <image
          href={bgRedImg}
          preserveAspectRatio="none"
          x="160"
          y="94"
          width="15"
          height="50"
        />
        <image
          href={fristBg}
          preserveAspectRatio="none"
          x="438"
          y="125"
          width="20"
          height="20"
        />
        <ellipse
          id="c1"
          cx="293"
          cy="187"
          rx="8.106666666666667"
          ry="3.546666666666667"
          fill="rgba(0,0,0,0)"
          stroke="#ff0000"
          style={{ opacity: 0.493333 }}
        />
        <ellipse
          id="c2"
          cx="293"
          cy="187"
          rx="0"
          ry="0"
          fill="rgba(0,0,0,0)"
          stroke="#ff0000"
          style={{ opacity: 1 }}
        />
        <ellipse
          id="c3"
          cx="168"
          cy="143"
          rx="0"
          ry="0"
          fill="rgba(0,0,0,0)"
          stroke="#ff0000"
          style={{ opacity: 1 }}
        />
        <ellipse
          id="c4"
          cx="168"
          cy="143"
          rx="6.08"
          ry="2.5333333333333337"
          fill="rgba(0,0,0,0)"
          stroke="#ff0000"
          style={{ opacity: 0.493333 }}
        />
      </svg>
    </DemoBox>
  )
})

export default Demo