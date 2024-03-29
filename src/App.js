import styled from "styled-components";
import AppBg from '@/assets/images/grid.png'

// import Demo from "./CSS3/01-CSS元素坐标系/01-坐标系";
// import Demo from "./CSS3/01-CSS元素坐标系/02-修改坐标系原点";
// import Demo from "./CSS3/02-3D动画/01-3D旋转";
// import Demo from "./CSS3/02-3D动画/02-透视效果";
// import Demo from "./CSS3/02-3D动画/03-3D空间";
// import Demo from "./CSS3/03-examples/01-正方体";
// import Demo from "./CSS3/03-examples/02-webpack-logo";
// import Demo from "./CSS3/03-examples/03-2.5D动画";


// import Demo from "./Canvas/01-绘制图形/01-绘制矩形";
// import Demo from "./Canvas/01-绘制图形/02-绘制直线-路径";
// import Demo from "./Canvas/01-绘制图形/03-绘制三角形-路径";
// import Demo from "./Canvas/01-绘制图形/04-绘制圆弧和圆-路径";
import Demo from "./Canvas/01-绘制图形/05-绘制矩形-路径";

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
