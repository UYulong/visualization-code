import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
  svg {
    background-color: rgba(255, 0, 0, 0.1);
  }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <svg width={300} height={200}>
        <rect x={0} y={0} width={100} height={50} fill='red'>
          {/* 3s 后，将属性 X 的值设置为：200  */}
          <set attributeName='x' to={200} begin='3s' />
        </rect>
      </svg>

      <svg width={300} height={200}>
        <rect id='rect2' x={0} y={0} width={100} height={50} fill='green'>
          {/* 当点击 ID 为 rect2 的矩形时， 将 X 属性值设置为： 200  */}
          <set attributeName='x' to={200} begin='rect2.click' />
        </rect>
      </svg>
    </DemoBox>
  )
})

export default Demo