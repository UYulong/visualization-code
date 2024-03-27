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
    ctx.beginPath()
    ctx.moveTo(100, 0)
    ctx.lineTo(0, 100)
    ctx.lineTo(200, 100)
    ctx.closePath()
    ctx.stroke() // 描边
    // ctx.fill() // 填充，会自动闭合路径，无需手动 closePath
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