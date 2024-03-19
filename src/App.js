import styled from "styled-components";
import AppBg from '@/assets/images/grid.png'

// import Demo from "./CSS3/01-CSS元素坐标系/01-坐标系";
import Demo from "./CSS3/01-CSS元素坐标系/02-修改坐标系原点";

const AppBox = styled.div`
  width: 100%;
  height: 100%;
  background: url(${AppBg});
`

function App() {
  return (
    <AppBox>
      <Demo />
    </AppBox>
  );
}

export default App;
