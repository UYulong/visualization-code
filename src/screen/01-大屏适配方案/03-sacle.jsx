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
    // 1. 获取当前屏幕宽度和设计稿宽度
    const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth
    const designWidth = 1920

    // 2. 计算缩放比例
    const scaleRatio = deviceWidth / designWidth
    console.log(deviceWidth, designWidth, scaleRatio);

    // 3. 设置 body 缩放比
    document.body.style = `transform-origin: left top; transform: scale(${scaleRatio})`
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