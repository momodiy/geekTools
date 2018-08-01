/*
* Author: stevenlee
* Date: 2018/8/2
* Description: ... 
*/

let arr = [11, 23, 26, 23, 11, 9]


//数组去重
const deduplication = arr => [...new Set(arr)]
console.log(deduplication(arr));  // [ 11, 23, 26, 9 ]

//保留数组中非重复数据
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
console.log(filterNonUnique(arr));  // [ 26, 9 ]

//保留数组中重复元素
const filterUnique = arr => arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i))
console.log(filterUnique(arr)); // [ 11, 23, 23, 11 ]