import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

import imgSrc from '../images/backdrop.png'

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

    const img = new Image()
    img.src = imgSrc

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 180, 130)

      ctx.beginPath()
      ctx.moveTo(50, 100)
      ctx.lineTo(60, 19)
      ctx.lineTo(70, 90)
      ctx.lineTo(80, 30)
      ctx.lineTo(90, 50)
      ctx.lineTo(100, 70)
      ctx.lineTo(110, 100)
      ctx.lineTo(120, 90)
      ctx.lineTo(130, 30)
      ctx.stroke()
      ctx.closePath()
    }
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