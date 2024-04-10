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
// import Demo from './SVG/04-填充和描边/02-描边'
// import Demo from './SVG/05-渐变和滤镜效果/01-渐变'
// import Demo from './SVG/05-渐变和滤镜效果/02-CSS毛玻璃效果-background-filter'
// import Demo from './SVG/05-渐变和滤镜效果/03-CSS毛玻璃效果-filter'
// import Demo from './SVG/05-渐变和滤镜效果/04-SVG模糊效果'
// import Demo from './SVG/06-形变/01-形变-translate'
// import Demo from './SVG/06-形变/02-形变-rotate'
// import Demo from './SVG/06-形变/03-形变-scale'
// import Demo from './SVG/07-SMIL动画/01-set元素'
// import Demo from './SVG/07-SMIL动画/02-animate元素'
// import Demo from './SVG/07-SMIL动画/03-animateTransform-translate'
// import Demo from './SVG/07-SMIL动画/04-animateTransform-rotate'
// import Demo from './SVG/07-SMIL动画/05-animateTransform-scale'
// import Demo from './SVG/07-SMIL动画/06-animateMotion'
// import Demo from './SVG/07-SMIL动画/07-animateMotion-优化.jsx'
// import Demo from './SVG/09-gsap/01-gsap基础'
// import Demo from './SVG/09-gsap/02-gsap补间动画'
// import Demo from './SVG/09-gsap/03-gsap动画时间线'
// import Demo from './SVG/09-gsap/04-滑板车动画'
// import Demo from './SVG/09-gsap/05-test'

// import Demo from './Echarts/01-Echars地图/01-中国地图创建方式一'
// import Demo from './Echarts/01-Echars地图/02-地图着色'
// import Demo from './Echarts/01-Echars地图/03-填充数据'
// import Demo from './Echarts/01-Echars地图/04-地图（散点图）'
// import Demo from './Echarts/01-Echars地图/05-地图+散点图'
// import Demo from './Echarts/01-Echars地图/06-自动轮播'
import Demo from './Echarts/01-Echars地图/07-地图下钻'

// import Demo from './SVG/examples/01-雪糕'
// import Demo from './SVG/examples/02-SMIL-纸飞机'
// import Demo from './SVG/examples/03-SMIL-进度条'
// import Demo from './SVG/examples/04-定位动画'
// import Demo from './SVG/examples/05-水波纹'

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
