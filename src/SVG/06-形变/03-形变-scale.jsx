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
      <svg width={300} height={300}>
        {/* 缩放一个元素 当只有一个值时：X轴和Y轴的缩放比例一样*/}
        {/* <rect transform='translate(100, 100) scale(2)' x={0} y={0} width={50} height={50} rx={10} ry={10} fill='red' /> */}

        {/* 旋转一个元素 当有两个值时：分别指定X轴和Y轴的缩放比*/}
        {/* <rect transform='translate(100, 100) scale(2, 4)' x={0} y={0} width={50} height={50} rx={10} ry={10} fill='red' /> */}

        {/* 旋转一个元素 指定缩放的中心点 */}
        <rect transform='translate(100, 100) scale(1)' x={-25} y={-25} width={50} height={50} rx={10} ry={10} fill='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo