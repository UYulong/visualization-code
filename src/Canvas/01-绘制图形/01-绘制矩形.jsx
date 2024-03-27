import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  .canvas {
    background-color: rgba(255, 0, 0, 0.1);
  }
`
// 绘制矩形可以通过两种方法：矩形方法、路径方法
// 矩形方法：
const Demo = memo(() => {
  const canvasRef = useRef()

  useEffect(() => {
    if (!canvasRef.current.getContext) {
      return
    }

    // 绘制填充矩形
    const ctx = canvasRef.current.getContext('2d')
    ctx.fillRect(0, 0, 100, 50) // 绘制一个填充的矩形
    ctx.strokeRect(150, 50, 100, 50) // 绘制一个矩形的边框
    // ctx.clearRect(0, 0, 300, 200) //  清除指定区域矩形，让清除部分完全透明
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