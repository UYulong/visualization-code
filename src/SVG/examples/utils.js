
/**
 * 计算 路径距离
 * @param {string} classname 
 */
export const getPathLength = (classname) => {
  let stickEl = document.getElementsByClassName(classname)[0];
  let stickLength = stickEl.getTotalLength();
  console.log(classname + "Length=", stickLength);
}