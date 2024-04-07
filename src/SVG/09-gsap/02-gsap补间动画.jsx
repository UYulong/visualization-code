import React, { memo, useRef } from 'react'
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

  const handleRectClickEvent = () => {
    gsap.to([rect1Ref.current, rect2Ref.current], {
      y: 200,
      duration: 5,
      ease: 'bounce.in'
    })

    gsap.from(rect3Ref.current, {
      scale: 0.3,
      duration: 3,
    })
  }

  return (
    <DemoBox>
      <svg width={300} height={300}>
        <rect ref={rect1Ref} x={0} y={0} rx={5} ry={5} width={50} height={50} fill='red' onClick={handleRectClickEvent} />
        <rect ref={rect2Ref} x={100} y={0} rx={5} ry={5} width={50} height={50} fill='red' />
        <rect ref={rect3Ref} x={200} y={0} rx={5} ry={5} width={50} height={50} fill='red' />
      </svg>
    </DemoBox>
  )
})

export default Demo