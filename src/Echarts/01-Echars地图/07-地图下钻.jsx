import React, { memo, useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import styled from 'styled-components'
import { Button } from "antd";
import { chinaMap } from '../lib/中华人民共和国'
import { Guangdong } from '../lib/广东省'

const DemoBox = styled.div`
  .chart {
    height: 500px;
  }
`

const Demo = memo(() => {
  const chartRef = useRef()
  const chartInstanceRef = useRef()

  const [data] = useState([
    { name: "北京市", value: 199 },
    { name: "天津市", value: 42 },
    { name: "河北省", value: 102 },
    { name: "山西省", value: 81 },
    { name: "内蒙古省", value: 47 },
    { name: "辽宁省", value: 67 },
    { name: "吉林省", value: 82 },
    { name: "黑龙江省", value: 123 },
    { name: "上海市", value: 24 },
    { name: "江苏省", value: 92 },
    { name: "浙江省", value: 114 },
    { name: "安徽省", value: 109 },
    { name: "福建省", value: 116 },
    { name: "江西省", value: 91 },
    { name: "山东省", value: 119 },
    { name: "河南省", value: 137 },
    { name: "湖北省", value: 116 },
    { name: "湖南省", value: 114 },
    { name: "重庆市", value: 91 },
    { name: "四川省", value: 125 },
    { name: "贵州省", value: 62 },
    { name: "云南省", value: 83 },
    { name: "西藏自治区", value: 9 },
    { name: "陕西省", value: 80 },
    { name: "甘肃省", value: 56 },
    { name: "青海省", value: 10 },
    { name: "宁夏回族自治区", value: 18 },
    { name: "新疆维吾尔自治区", value: 180 },
    { name: "广东省", value: 123 },
    { name: "广西壮族自治区", value: 59 },
    { name: "海南省", value: 14 },
    { name: "台湾省", value: 45 },
  ])

  echarts.registerMap('中国', chinaMap)

  let option = {}

  useEffect(() => {
    chartInstanceRef.current = echarts.init(chartRef.current)

    option = {
      tooltip: {},
      series: {
        name: '中国地图',
        type: 'map',
        map: '中国',
        data,
        itemStyle: {
          areaColor: '#023677',
          borderColor: '#1180c7'
        },
        emphasis: {
          focus: 'none',  // 高亮图形时，是否淡出其他图形 none | selft
          itemStyle: {
            areaColor: '#4499d0',
          },
          label: {
            color: 'white'
          }
        },
        select: {
          itemStyle: {
            areaColor: '#023677',
          },
          label: {
            color: '#fff',
          }
        },
      }
    }

    chartInstanceRef.current.setOption(option)

    // 地图下钻
    chartInstanceRef.current.on('click', (event) => {
      const { name } = event

      if (name === '广东省') {
        echarts.registerMap('广东省', Guangdong)
        option.series.name = `${name}地图`
        option.series.map = '广东省'

        chartInstanceRef.current.setOption(option)
      } else {
        console.log(`${name} 地图数据未加载成功`);
      }
    })

    return () => {
      chartInstanceRef.current && chartInstanceRef.current.dispose()
    }
  }, [data])

  // 回退
  const handleBack = () => {
    console.log('back');
    option.series.name = '中国地图'
    option.series.map = '中国'
    chartInstanceRef.current.setOption(option)
  }

  return (
    <DemoBox>
      <div className='chart' ref={chartRef} />

      <Button type='primary' onClick={handleBack}>全国</Button>
    </DemoBox>
  )
})

export default Demo