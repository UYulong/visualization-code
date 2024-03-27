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
    ctx.beginPath() // 开启路径
    ctx.moveTo(100, 100) // 移动画笔到 100,100
    ctx.lineTo(200, 50) // 绘制一条以起点为 100,100 到 终点为 200,50 的直线
    ctx.closePath() // 闭合路径
    ctx.stroke() // 给直线描边
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