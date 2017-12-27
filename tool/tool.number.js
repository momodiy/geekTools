/*
*Created by Steven on 12/27/2017
*/

/*
* 计算阶乘
* */
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
// factorial(6) -> 720