import styled from "styled-components";
// import Demo from './screen/01-大屏适配方案/01-rem+fontsize'
// import Demo from './screen/01-大屏适配方案/02-vw'
// import Demo from './screen/01-大屏适配方案/03-sacle'
import Demo from './screen/01-大屏适配方案/03-sacle-动态计算'

const AppBox = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <AppBox>
      <Demo />
    </AppBox>
  );
}

export default App;
