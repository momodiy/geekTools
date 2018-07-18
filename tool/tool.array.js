// import _ from 'lodash'

const upset = () => {
  Array.prototype.upset = function () {
    return this.sort(() => Math.random() - 0.5)
  };
};

/*
*将所有可能出现的字符串组合情况作为数组输出
*/

const anagrams = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str.split('').reduce((acc, letter, i) =>
    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
};
// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']

/*
* 求数组平均数
* */
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// average([1,2,3]) -> 2

/*
* 计算数组中只出现的个数
* reduce()来递增计数器
* */
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3

/*
* 数组去重
* 注：暂不考虑对象字面量，函数等引用类型的去重，也不考虑 NaN, undefined, null等特殊类型情况。
* */

//基础的es5数组去重
let a = [1, 1, '1', '2', 1];

function unique(arr) {
  var res = []
  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i]
    for (var j = 0, len = res.length; j < len; j++) {
      if (item === res[j]) //arr数组的item在res已经存在,就跳出循环
        break
    }
    if (j === len) //循环完毕,arr数组的item在res找不到,就push到res数组中
      res.push(item)
  }
  return res
}

console.log(unique(a)) // [1, 2, "1"]

//filter遍历去重
let arr = [1, 1, '1', '2', 1];

function unique1(arr) {
  return arr.filter(function (ele, index, array) {
    return array.indexOf(ele) === index//很巧妙,这样筛选一对一的,过滤掉重复的
  })
}

//将以上函数改写为es6
const unique2 = arr => arr.filter((ele, index, array) => array.indexOf(ele) === index);

console.log(unique2(a)) // [1, 2, "1"]

//set去重，最简去重方式
const unique3 = arr => [...new Set(arr)];
// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]

