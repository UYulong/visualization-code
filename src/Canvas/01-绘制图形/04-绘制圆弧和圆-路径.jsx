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
    // console.dir(ctx);
    ctx.beginPath()
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, true)
    // ctx.closePath()
    // ctx.stroke()
    ctx.fill() // 填充会自动闭合路径

    ctx.beginPath()
    ctx.arc(200, 150, 25, 0, Math.PI)
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