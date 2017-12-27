const _=require('lodash');

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
* 数组去重(es6)
* */
const unique = arr => [...new Set(arr)];
// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
