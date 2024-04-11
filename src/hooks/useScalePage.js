import { useEffect } from "react"
import { useThrottleFn } from 'ahooks'

export const useScalePage = () => {
  const resizePage = () => {
    console.log('resizePage');

    // 1. 获取当前屏幕尺寸和设计稿尺寸
    const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth
    const deviceHeight = document.documentElement.clientHeight || document.body.clientHeight

    const designWidth = 1920
    const designHeight = 1080
    const designScaleRatio = designWidth / designHeight

    // 2. 计算缩放比例
    let scaleRatio = deviceWidth / designWidth // 设计稿宽高比
    const deviceScaleRatio = deviceWidth / deviceHeight // 设备宽高比

    // 3. 设置 body 缩放比
    if (deviceScaleRatio > designScaleRatio) {
      // 超宽屏 按照高度进行缩放
      scaleRatio = deviceHeight / designHeight
      document.body.style = `transform: scale(${scaleRatio}) translateX(-50%); left: 50%`
    } else {
      // 正常屏 按照宽度进行缩放
      document.body.style = `transform: scale(${scaleRatio})`
    }
  }

  // 节流
  const { run: handleResizePage } = useThrottleFn(() => {
    resizePage()
  }, {
    wait: 500
  })

  resizePage()
  window.addEventListener('resize', handleResizePage)

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResizePage)
    }
  }, [handleResizePage])
}