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

    // 设置 线宽
    ctx.lineWidth = 10

    // 设置端点样式 butt: 截断[默认] ｜ round: 圆形 ｜ square: 正方形
    // ctx.lineCap = 'round'

    // ctx.beginPath()
    // ctx.moveTo(100, 150)
    // ctx.lineTo(200, 150)
    // ctx.stroke()
    // ctx.closePath()

    // 设置线段连接处 round:圆形 ｜ bevel: 斜角 | miter: 斜槽归[默认]
    ctx.lineJoin = 'miter'
    ctx.beginPath()
    ctx.lineTo(50, 100)
    ctx.lineTo(150, 10)
    ctx.lineTo(250, 100)
    ctx.closePath()
    ctx.stroke()
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