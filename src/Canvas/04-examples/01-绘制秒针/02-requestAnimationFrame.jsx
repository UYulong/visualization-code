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

    const draw = () => {
      const second = new Date().getSeconds()

      // 1. 用 clearRect 方法，晴空canvas
      ctx.clearRect(0, 0, 300, 200)

      // 2. 保存canvas状态
      ctx.save()

      // 3. 修改canvas状态
      ctx.lineWidth = 6
      ctx.strokeStyle = 'red'
      ctx.lineCap = 'round'

      ctx.translate(100, 100)
      ctx.rotate(Math.PI * 2 / 60 * second)

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -80)
      ctx.stroke()
      ctx.closePath()

      ctx.restore()

      requestAnimationFrame(draw)
    }

    // 通过 requestAnimationFrame 方式 开启定时器
    requestAnimationFrame(draw)
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