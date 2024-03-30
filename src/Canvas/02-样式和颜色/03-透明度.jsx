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

    ctx.globalAlpha = 0.3

    // ctx.fillStyle = 'rgba(255, 255, 0, 0.3)'
    ctx.fillRect(10, 0, 50, 50)

    // ctx.fillStyle = 'rgba(0, 255, 255, 0.3)'
    ctx.beginPath()
    ctx.rect(100, 100, 50, 50)
    ctx.closePath()
    ctx.fill()
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