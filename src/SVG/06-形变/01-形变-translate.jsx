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
        {/* 平移一个元素 当只有一个值时：在X轴平移的距离 */}
        {/* <rect transform='translate(100)' x={0} y={0} width={100} height={50} rx={10} ry={10} fill='red' /> */}

        {/* 平移一个元素 当有两个值时：在X轴和在Y轴上分别平移的距离 */}
        {/* <rect transform='translate(100, 100)' x={0} y={0} width={100} height={50} rx={10} ry={10} fill='red' /> */}

        {/* 平移一个元素 会生成新的坐标系，后续所有的操作，均基于新创建的坐标系 */}
        <rect transform='translate(100, 100)' x={10} y={10} width={100} height={50} rx={10} ry={10} fill='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo