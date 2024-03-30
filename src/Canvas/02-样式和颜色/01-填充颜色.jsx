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
    ctx.fillStyle = 'red' // 设置填充颜色，在调用 fill 之前赋值
    ctx.beginPath()
    ctx.fillRect(10, 0, 100, 50)

    ctx.fillStyle = 'yellow' // 设置填充颜色，在调用 fill 之前赋值
    ctx.moveTo(100, 100)
    ctx.fillRect(100, 100, 100, 50)
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