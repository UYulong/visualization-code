import styled from "styled-components";
import AppBg from '@/assets/images/grid.png'

/* CSS */
// import Demo from "./CSS3/01-CSS元素坐标系/01-坐标系";
// import Demo from "./CSS3/01-CSS元素坐标系/02-修改坐标系原点";
// import Demo from "./CSS3/02-3D动画/01-3D旋转";
// import Demo from "./CSS3/02-3D动画/02-透视效果";
// import Demo from "./CSS3/02-3D动画/03-3D空间";
// import Demo from "./CSS3/03-examples/01-正方体";
// import Demo from "./CSS3/03-examples/02-webpack-logo";
// import Demo from "./CSS3/03-examples/03-2.5D动画";

// Canvas
// import Demo from "./Canvas/01-绘制图形/01-绘制矩形";
// import Demo from "./Canvas/01-绘制图形/02-绘制直线-路径";
// import Demo from "./Canvas/01-绘制图形/03-绘制三角形-路径";
// import Demo from "./Canvas/01-绘制图形/04-绘制圆弧和圆-路径";
// import Demo from "./Canvas/01-绘制图形/05-绘制矩形-路径";

// import Demo from "./Canvas/02-样式和颜色/01-填充颜色";
// import Demo from "./Canvas/02-样式和颜色/02-描边颜色";
// import Demo from "./Canvas/02-样式和颜色/03-透明度";
// import Demo from "./Canvas/02-样式和颜色/04-线段样式";

// import Demo from './Canvas/03-绘制字体和图片/01-绘制字体'
// import Demo from './Canvas/03-绘制字体和图片/02-绘制图片'

// import Demo from './Canvas/04-examples/01-绘制秒针/01-setInterval'
// import Demo from './Canvas/04-examples/01-绘制秒针/02-requestAnimationFrame'
// import Demo from './Canvas/04-examples/02-太阳系动画/01-普通绘制'
// import Demo from './Canvas/04-examples/02-太阳系动画/02-封装'
// import Demo from './Canvas/04-examples/03-时钟/01-普通'

// SVG
// import Demo from './SVG/01-viewport与viewbox/01-viewpor与viewbox有相同宽高比'
// import Demo from './SVG/01-viewport与viewbox/02-viewpor与viewbox有不同宽高比'
// import Demo from './SVG/02-绘制基本图形/01-绘制矩形'
// import Demo from './SVG/02-绘制基本图形/02-绘制圆形'
// import Demo from './SVG/02-绘制基本图形/03-绘制椭圆'
// import Demo from './SVG/02-绘制基本图形/04-绘制线条'
// import Demo from './SVG/02-绘制基本图形/05-绘制折线'
// import Demo from './SVG/02-绘制基本图形/06-绘制多边形'
// import Demo from './SVG/02-绘制基本图形/07-绘制路径'
// import Demo from './SVG/02-绘制基本图形/08-绘制图片'
// import Demo from './SVG/02-绘制基本图形/09-绘制文字'
// import Demo from './SVG/03-组合和复用/01-组合'
// import Demo from './SVG/03-组合和复用/02-复用-defs'
// import Demo from './SVG/03-组合和复用/03-复用-symbol'
// import Demo from './SVG/04-填充和描边/01-填充'
import Demo from './SVG/04-填充和描边/02-描边'

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
