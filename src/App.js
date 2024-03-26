import styled from "styled-components";
import AppBg from '@/assets/images/grid.png'

// import Demo from "./CSS3/01-CSS元素坐标系/01-坐标系";
// import Demo from "./CSS3/01-CSS元素坐标系/02-修改坐标系原点";
// import Demo from "./CSS3/02-3D动画/01-3D旋转";
// import Demo from "./CSS3/02-3D动画/02-透视效果";
// import Demo from "./CSS3/02-3D动画/03-3D空间";
import Demo from "./CSS3/03-examples/01-正方体";

const AppBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
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
