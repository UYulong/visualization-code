import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

// 图片
import sunImg from '../../images/canvas_sun.png'
import earthImg from '../../images/canvas_earth.png'
import moonImg from '../../images/canvas_moon.png'

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

    const sunImage = new Image()
    sunImage.src = sunImg

    const earthImage = new Image()
    earthImage.src = earthImg

    const moonImage = new Image()
    moonImage.src = moonImg


    const draw = () => {

      const time = new Date()
      const second = time.getSeconds()
      const minllSec = time.getMilliseconds()

      ctx.clearRect(0, 0, 300, 300)
      ctx.save()

      // 1. 绘制 太阳背景 & 轨道
      drawSunBg()

      // 2. 绘制 地球 和 月球
      drawEarthAndMoon(second, minllSec)

      ctx.restore()

      requestAnimationFrame(draw)
    }

    // 绘制背景 太阳 和 轨道
    const drawSunBg = () => {
      ctx.save() // sun start
      ctx.drawImage(sunImage, 0, 0)
      // 绘制轨道
      ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
      ctx.translate(150, 150)
      ctx.beginPath()
      ctx.arc(0, 0, 105, 0, Math.PI * 2)
      ctx.stroke()
      ctx.closePath()
      ctx.restore() // sun end
    }

    // 绘制 地球 和 月球
    const drawEarthAndMoon = (second, minllSec) => {
      ctx.save() // earch-moon start
      // 地球
      ctx.translate(150, 150)

      // 地球旋转
      ctx.rotate(Math.PI * 2 / 60 * second + Math.PI * 2 / 60 / 1000 * minllSec)

      ctx.translate(0, -105)
      ctx.drawImage(earthImage, -12, -12)

      // 月球
      ctx.save() // moon start

      // 月球旋转
      ctx.rotate(Math.PI * 2 / 10 * second + Math.PI * 2 / 10 / 1000 * minllSec)

      ctx.translate(0, -28)

      ctx.drawImage(moonImage, -3.5, -3.5)
      ctx.restore() // moon end

      // 绘制地球蒙版
      drawEarthMask()

      ctx.restore() // earch-moon end
    }

    // 绘制地球蒙版
    const drawEarthMask = () => {
      ctx.save() // mask start
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
      ctx.fillRect(-12, -24, 24, 24)
      ctx.restore() // mask end
    }

    requestAnimationFrame(draw)
  }, [])

  return (
    <DemoBox>
      <canvas className='canvas' ref={canvasRef} width={300} height={300}>
        您的浏览器不支持Canvas
      </canvas>
    </DemoBox>
  )
})

export default Demo