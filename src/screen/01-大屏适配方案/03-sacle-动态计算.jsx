import React, { memo, useEffect } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    div {
      width: 33.33%;
      height: 50%;
      box-sizing: border-box;
      font-size: 30px;
      border: 2px solid green;
    }
`

const Demo = memo(() => {

  useEffect(() => {
    // 1. 获取当前屏幕尺寸和设计稿尺寸
    const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth
    const deviceHeight = document.documentElement.clientHeight || document.body.clientHeight

    const designWidth = 1920
    const designHeight = 1080
    const designScaleRatio = designWidth / designHeight

    // 2. 计算缩放比例
    let scaleRatio = deviceWidth / designWidth // 设计稿宽高比
    const deviceScaleRatio = deviceWidth / deviceHeight // 设备宽高比

    // 3. 设置 body 缩放比
    if (deviceScaleRatio > designScaleRatio) {
      // 超宽屏 按照高度进行缩放
      scaleRatio = deviceHeight / designHeight
      document.body.style = `transform: scale(${scaleRatio}) translateX(-50%); left: 50%`
    } else {
      // 正常屏 按照宽度进行缩放
      document.body.style = `transform: scale(${scaleRatio})`
    }
  }, [])

  return (
    <DemoBox>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </DemoBox>
  )
})

export default Demo