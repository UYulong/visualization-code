import React, { memo } from 'react'
import styled from 'styled-components'
import bgImg from './images/banbj.jpeg'
import banner from './images/banner.png'

import cssObj from './03-2.5D动画.module.css'
console.log(cssObj);

const DemoBox = styled.div`
  width: 1920px;
  position: relative;
  
  .an {
    position: absolute;
    min-width: 100%;
    min-height: 500px;
    height: auto;
    width: auto;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    /* z-index: -10; */
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
  }

  .maxCon {
    height: 500px;
    width: 100%;
    max-width: 1200px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .rtMove {
    width: 444px;
    height: 430px;
    position: absolute;
    right: 70px;
    top: 40px;
    background-image: url(${banner});
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  /* 动画的子元素 */
  .rtMove .tuC {
    position: absolute;
    top: 228px;
    left: 168px;
    opacity: 1;
    animation: ${cssObj.tuC} 1.6s linear infinite;
  }

  .rtMove .tuB {
    position: absolute;
    top: 123px;
    left: 111px;
    animation: ${cssObj.toB} 2s linear infinite;
  }

  .rtMove .guangA {
    position: absolute;
    top: 309px;
    left: 279px;
    animation: ${cssObj.guangA} 1.3s linear infinite;
  }

  .rtMove .guangB {
    position: absolute;
    top: 263px;
    left: 239px;
    animation: ${cssObj.guangB} 1.1s linear infinite;
  }

  .rtMove .lingxA {
    position: absolute;
    top: 194px;
    left: 126px;
    opacity: 1;
    animation: ${cssObj.lingxA} 2s linear infinite;
  }

  .rtMove .lingxB {
    position: absolute;
    top: 163px;
    left: 79px;
    opacity: 1;
    animation: ${cssObj.lingxB} 2.2s linear infinite;
  }

  .rtMove .lingxC {
    position: absolute;
    top: 179px;
    left: 189px;
    opacity: 1;
    animation: ${cssObj.lingxC} 1.7s linear infinite;
  }

  .rtMove .lingxD {
    position: absolute;
    top: 103px;
    left: 160px;
    opacity: 1;
    animation: ${cssObj.lingxD} 2.7s linear infinite;
  }

  .rtMove .lingxE {
    position: absolute;
    top: 104px;
    left: 95px;
    opacity: 1;
    animation: ${cssObj.lingxB} 1.2s linear infinite;
  }

  .rtMove .lingxF {
    position: absolute;
    top: 84px;
    left: 144px;
    opacity: 1;
    animation: ${cssObj.lingxF} 1.4s linear infinite;
  }

  .rtMove .chaunB {
    position: absolute;
    top: 38px;
    left: 318px;
    animation: ${cssObj.chaunB} 1.2s linear infinite;
  }

  .rtMove .chaunC {
    position: absolute;
    top: 60px;
    left: 318px;
    animation: ${cssObj.chaunC} 0.7s linear infinite;
  }

  .rtMove .tuA {
    position: absolute;
    top: 140px;
    left: 316px;
    animation: ${cssObj.tuA} 1.3s linear infinite;
  }

  .rtMove .tuAa {
    position: absolute;
    top: 140px;
    left: 316px;
    animation: ${cssObj.tuAa} 1.3s linear infinite;
  }

  .rtMove .ziA {
    position: absolute;
    top: 114px;
    left: 320px;
    animation: ${cssObj.ziA} 2.6s linear infinite;
  }

  .rtMove .ziB {
    position: absolute;
    top: 144px;
    left: 339px;
    animation: ${cssObj.ziB} 2s linear infinite;
  }

  .rtMove .ziC {
    position: absolute;
    top: 91px;
    left: 349px;
    animation: ${cssObj.ziC} 1.7s linear infinite;
  }

  .rtMove .ma {
    position: absolute;
    top: 247px;
    left: 303px;
  }

  .rtMove .tuMing {
    opacity: 0;
    animation: ${cssObj.tuMing} 0.6s linear infinite;
  }

  .rtMove .ren {
    position: absolute;
    top: 283px;
    left: 330px;
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <div className="an">
        <div className="maxCon">
          <div className="rtMove">
            <img className="tuB" src={require('./images/tuB.png')} alt='tuB' />
            <img className="guangA" src={require("./images/guang.png")} alt='guangA' />
            <img className="guangB" src={require("./images/guang.png")} alt="guangB" />
            <img className="tuC" src={require("./images/tuC.png")} alt="tuC" />

            <img className="lingxA" src={require("./images/lingxA.png")} alt='lingxA' />
            <img className="lingxB" src={require("./images/lingxB.png")} alt='lingxB' />
            <img className="lingxC" src={require("./images/lingxC.png")} alt='lingxC' />
            <img className="lingxD" src={require("./images/lingxD.png")} alt='lingxD' />
            <img className="lingxE" src={require("./images/lingxE.png")} alt='llingxE' />
            <img className="lingxF" src={require("./images/lingxF.png")} alt='lingxF' />

            <img className="chaunB" src={require("./images/chaunB.png")} alt='chaunB' />
            <img className="chaunC" src={require("./images/chaunB.png")} alt='chaunC' />
            <img className="tuA" src={require("./images/tuA.png")} alt='tuA' />
            <img className="tuAa" src={require("./images/tuA.png")} alt='tuAa' />

            <img className="ziA" src={require("./images/ziA.png")} alt='ziA' />
            <img className="ziB" src={require("./images/ziB.png")} alt='ziB' />
            <img className="ziC" src={require("./images/ziC.png")} alt='ziC' />

            <img className="ma tuAn" src={require("./images/tuAn.png")} alt='ma' />
            <img className="ma tuMing" src={require("./images/tuMing.png")} alt='ma' />

            <img className="ren" src={require("./images/ren.png")} alt='ren' />
          </div>
        </div>
      </div>
    </DemoBox>
  )
})

export default Demo