/*
* Author: stevenlee
* Date: 2018/8/2
* Description: 求两个数或多个数的最大公约数
*/

const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};