/*
*Created by Steven on 12/27/2017
*/

/*
* 大写每个单词首字母
* */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// capitalizeEveryWord('hello world!') -> 'Hello World!'

/*
* 去除空格
* 检查回文
* 大小写模糊
* */
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g,'');
    return s === s.split('').reverse().join('');
};
// palindrome('taco cat') -> true


