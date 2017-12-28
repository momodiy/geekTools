/*
*Created by Steven on 12/27/2017
*/

/*
* 计算阶乘
* */
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
// factorial(6) -> 720

/*
* 数字取整
* 使用基本运算符取整优点：简洁、运行速度快
* 缺点：代码可读性差、数字范围需在 ±2^31−1(2147483647)否则会出现异常
* */
//parseInt
const a = parseInt(2.33333);
//Math.trunc
const a = Math.trunc(2.33333)
//~~number
console.log(~~47.11)  // -> 47
console.log(~~1.9999) // -> 1
console.log(~~3)      // -> 3
console.log(~~[])     // -> 0
console.log(~~NaN)    // -> 0
console.log(~~null)   // -> 0
//number | 0
console.log(20.15|0);          // -> 20
console.log((-20.15)|0);       // -> -20
//number ^ 0
console.log(20.15^0);          // -> 20
console.log((-20.15)^0);       // -> -20
//number << 0
console.log(20.15 << 0);     // -> 20
console.log((-20.15) << 0);  //-20