/*
* Author: stevenlee
* Date: 2018/7/7
* Description: rgb类型颜色与16进制颜色相互转换的两个函数
*/

/**
 *
 * @param rgb []
 * @returns {string}
 *
 * eg.
 * input: [220,20,60]
 * output:  #dc143c
 */
const convertRGBToHex = (...rgb) => {
  if (rgb.length !== 3 || rgb.some(i => i < 0 || i > 255)) return 'Invalid data'
  const [r, j, b] = rgb
  return `#${r.toString(16)}${j.toString(16)}${b.toString(16)}`
}

console.log(convertRGBToHex(220,20,60));


/**
 * @param rgb String
 * @returns {*[]}
 *
 * eg.
 * input: "#ffb437" or "ffb437"
 * output:  [255, 180, 55]
 */
const convertHexToRGB = str => {
  str = str[0] === '#' ? str.slice(1) : str
  str = str.length === 3 ? str.repeat(2) : str
  if ((str.length !== 6) || !(/^[0-9a-fA-F]{3,6}$/i.test(str))) return 'Invalid data'
  return [parseInt(str[0] + str[1], 16), parseInt(str[2] + str[3], 16), parseInt(str[4] + str[5], 16)]
}

console.log(convertHexToRGB('#ffb437'))