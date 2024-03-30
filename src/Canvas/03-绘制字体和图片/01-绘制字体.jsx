import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  .canvas {
    background-color: rgba(255, 0, 0, 0.1);
  }
`

const Demo = memo(() => {
  const canvasRef = useRef()

  useEffect(() => {
    if (!canvasRef.current.getContext) {
      return
    }

    const ctx = canvasRef.current.getContext('2d')

    // 字体属性
    ctx.font = '30px sans-serif' // 字体 默认值为：10px sans-serif
    ctx.textAlign = 'center' // 文本对齐 start[默认] ｜ end | left | right | center
    ctx.textBaseline = 'middle' // 文本基线对齐 alphabetic[默认] | top | hanging | middle | ideographic | bottom

    // 绘制字体
    ctx.fillText('Alibaba', 100, 100)


  }, [])

  return (
    <DemoBox>
      <canvas className='canvas' ref={canvasRef} width={300} height={200}>
        您的浏览器不支持Canvas
      </canvas>
    </DemoBox>
  )
})

export default Demo