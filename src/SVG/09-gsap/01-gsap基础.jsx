import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";

const DemoBox = styled.div`
  svg {
    background-color: rgba(255, 0, 0, 0.1);
  }
`

const Demo = memo(() => {
  const rect1Ref = useRef()
  const rect2Ref = useRef()
  const rect3Ref = useRef()

  useEffect(() => {
    gsap.to(rect1Ref.current, {
      y: 200,
      duration: 5
    })
  }, [])

  return (
    <DemoBox>
      <svg width={300} height={300}>
        <rect ref={rect1Ref} x={0} y={0} rx={5} ry={5} width={50} height={50} fill='red' />
        <rect ref={rect2Ref} x={100} y={0} rx={5} ry={5} width={50} height={50} fill='red' />
        <rect ref={rect3Ref} x={200} y={0} rx={5} ry={5} width={50} height={50} fill='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo