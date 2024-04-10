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

    const data = [
      { name: "广东省", value: [113.280637, 23.125178, 93] },
      { name: "北京市", value: [116.405285, 39.904989, 199], }
    ];

    const option = {
      tooltip: {},
      geo: [
        {
          map: '中国'
        }
      ],

      series: [
        {
          name: '散点图',
          type: 'effectScatter',
          geoIndex: 0,
          coordinateSystem: 'geo',
          data,
          symbolSize(val) {
            return val[2] / 10
          },
          itemStyle: {
            color: 'red',
            // shadowBlur: 10,
            // shadowColor: 'yellow'
          }
        }
      ]
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