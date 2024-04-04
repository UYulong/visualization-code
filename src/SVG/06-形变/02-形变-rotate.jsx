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
        {/* 旋转一个元素 当只有一个值时：指定的时旋转的角度*/}
        {/* <rect transform='translate(100, 100) rotate(45)' x={0} y={0} width={100} height={50} rx={10} ry={10} fill='red' /> */}

        {/* 旋转一个元素 当有三个值时：指定的时旋转的角度，和 旋转的中心*/}
        {/* <rect transform='translate(100, 100) rotate(45, 50, 25)' x={0} y={0} width={100} height={50} rx={10} ry={10} fill='red' /> */}

        {/* 旋转一个元素 形变的顺序不一样，结果不一样 */}
        <rect transform='rotate(45, 50, 25) translate(100)' x={0} y={0} width={100} height={50} rx={10} ry={10} fill='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo