import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
width: 300px;
height: 300px;
background-color: #000;
border-radius: 50px;

/* .canvas {
  background-color: rgba(255, 0, 0, 0.1);
} */
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

    // 时钟 
    const hoursList = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]

    const draw = () => {
      ctx.save()

      const time = new Date()
      const hour = time.getHours()
      const minutes = time.getMinutes()
      const second = time.getSeconds()
      // console.log('draw', hour, minutes, second);


      // 1. 绘制白色背景
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = 'white'
      ctx.translate(150, 150)
      ctx.arc(0, 0, 130, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // 2. 绘制 数字
      ctx.save()
      ctx.font = '30px fangsong'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.translate(150, 150)
      for (let i = 0; i < hoursList.length; i++) {
        const hour = hoursList[i];
        const x = Math.cos(Math.PI * 2 / 12 * i) * 100;
        const y = Math.sin(Math.PI * 2 / 12 * i) * 100;
        ctx.fillText(hour, x, y)
      }
      ctx.restore()

      // 3. 绘制 时针
      ctx.save()
      ctx.translate(150, 150)
      // 时针旋转
      ctx.rotate(
        Math.PI * 2 / 12 * hour
        +
        Math.PI * 2 / 12 / 60 * minutes
        +
        Math.PI * 2 / 12 / 60 / 60 * second
      )
      ctx.lineWidth = 4
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -50)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()

      // 4. 绘制分针
      ctx.save()
      ctx.translate(150, 150)
      // 分针 旋转
      ctx.rotate(
        Math.PI * 2 / 60 * minutes
        +
        Math.PI * 2 / 60 / 60 * second
      )
      ctx.beginPath()
      ctx.lineCap = 'round'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -70)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()


      // 5. 绘制 秒针
      ctx.save()
      ctx.translate(150, 150)
      // 秒针旋转
      ctx.rotate(Math.PI * 2 / 60 * second)
      ctx.lineCap = 'round'
      ctx.lineWidth = 2
      ctx.strokeStyle = 'red'
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -80)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()

      // 6. 绘制 圆心
      ctx.save()
      ctx.translate(150, 150)
      ctx.beginPath()
      ctx.arc(0, 0, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()

      ctx.beginPath()
      ctx.fillStyle = 'gray'
      ctx.arc(0, 0, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // 7. 绘制 时 刻度
      ctx.save()
      ctx.translate(150, 150)
      ctx.lineWidth = 3
      for (let i = 0; i < 12; i++) {
        ctx.beginPath()
        ctx.rotate(Math.PI * 2 / 12)
        ctx.moveTo(0, -130)
        ctx.lineTo(0, -123)
        ctx.stroke()
        ctx.closePath()
      }
      ctx.restore()

      // 绘制 分 刻度
      ctx.save()
      ctx.translate(150, 150)
      ctx.lineWidth = 2
      for (let i = 0; i < 60; i++) {
        ctx.beginPath()
        ctx.rotate(Math.PI * 2 / 60)
        ctx.moveTo(0, -130)
        ctx.lineTo(0, -125)
        ctx.stroke()
        ctx.closePath()
      }
      ctx.restore()


      ctx.restore()


      requestAnimationFrame(draw)

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