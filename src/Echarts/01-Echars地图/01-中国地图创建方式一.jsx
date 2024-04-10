import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import styled from 'styled-components'
import { chinaMap } from '../lib/中华人民共和国'

const DemoBox = styled.div`
  .chart {
    height: 500px;
  }
`

const Demo = memo(() => {
  const chartRef = useRef()

  echarts.registerMap('中国', chinaMap)

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current)

    // 方式一：创建一个 全局地图 （创建一个全局坐标系统，使其他坐标系复用该坐标系）
    // const option = {
    //   geo: {
    //     map: '中国'
    //   }
    // }

    // 方式二：系列图，创建一个坐标系统，用来展示数据
    const option = {
      series: {
        type: 'map',
        map: '中国'
      }
    }

    chartInstance.setOption(option)

    return () => {
      if (chartInstance) {
        chartInstance.dispose()
        chartInstance = null
      }
    }

  }, [])

  return (
    <DemoBox>
      <div className='chart' ref={chartRef}></div>
    </DemoBox>
  )
})

export default Demo