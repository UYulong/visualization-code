import React, { memo } from 'react'
import styled from 'styled-components'

const DemoBox = styled.div`
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    div {
      width: 33.33%;
      height: 50%;
      box-sizing: border-box;
      font-size: .375rem;
      border: 2px solid green;
    }
`

const Demo = memo(() => {
  return (
    <DemoBox>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </DemoBox>
  )
})

export default Demo