### 1.阶乘算法

```js
var factorialize= (num=1) =>{

  if(num>1){
    return num*factorialize(--num);
  }else{
    return 1;
  }
};

factorialize(5);
```

### 2.检查回文
条件：忽略大小写，无视所有除字母、数字以外的字符。

```js
const palindrome= str => {
  str=str.replace(/[^a-zA-Z0-9]/g,'').toLocaleLowerCase();
  return str===str.split('').reverse().join('');
}
```
### 3.返回最长的单词长度
条件：返回多个单词中最长的单词的长度。

```js
const findLongestWord= str => Math.max(...str.split(' ').map(v=>v=v.length));
```
- 字符串使用空格分成一个数组
- 遍历数组将其每一项的长度赋值为那一项的值
- 取出记录长度的新数组最大值，就是出现次数最多一项的次数

### 4.数组最大最小值

#### (1) 排序法


```js
array.sort();    //从大到小排序
array.sort().[0];   //获取小大值
arr.sort().pop();    //获取最大值
```
#### (2) 方法借用

```js
Math.max.apply('',arr);
Math.min.apply('',arr);
```

#### (3)扩展运算符

```js
Math.min(...arr);
Math.max(...arr);
```
### 5. 字符串首字母大写输出

```js
function titleCase(str) {
  str=str.split(' ').map(v=>
    v=v.split('')[0].toLocaleUpperCase()+v.toLocaleLowerCase().split('').slice(1).join(''));
  return str.join(' ');
}

titleCase("I'm a little tea pot");
```
- 字符串通过空格分割成数组
- 遍历数组，其中的每一项都将首字母大写，拼接之后的转化为小写的剩余字符


<h2 style=color:red>一段很牛逼的正则。。。</h2>
```js
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
```
- 把所有字符都转化为小写
- 匹配（开头位置 | 空字符）且后边字符非空的所有字符
    - 匹配任何可见字符 `\S`
    - 匹配任何不可见字符 `\s`
    -  ^  <strong style=color:red>匹配开头的位置，而非匹配开头第一个字符</strong>
- 将括号中的字符（对应所有首字母）替换成大写

### 6. 返回二维数组中每一项的最大值（返回值为一个一维数组）

```js
function largestOfFour(arr) {
  return arr.map(v=>Math.max(...v));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```
- largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 返回结果为[27,5,39,1001]
- largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 返回结果为 [9, 35, 97, 1000000].

### 7. 判断字符串是否以特定字符结尾

类似于模拟`.endsWith()`方法。

```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(-target.length)===target;
}

confirmEnding("Bastian", "n");
```

### 8. 字符串重复输出
- repeatStringNumTimes("abc", 3); 输出'abcabcabc'
- 第二个参数小于0需返回空字符串


```js
function repeatStringNumTimes(str, num) {
  return str.repeat(num>0?num:0);
}

repeatStringNumTimes("abc", 3);
```

### 9. 字符串截取
- 参数一，待截取字符串
- 参数二，截取长度

```js
function truncateString(str, num) {
  return str.length>num?str.slice(0,num)+'...':str;
}
```


### 10. 一维数组按要求转为二维

- chunkArrayInGroups(["a", "b", "c", "d"], 2) 因该转化为 [["a", "b"], ["c", "d"]]
- chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) 因该转化为 [[0, 1, 2], [3, 4, 5]]



```js
function chunkArrayInGroups(arr, size) {
  var newArr=[];
  arr.map((v,i)=>{
    let index=Math.floor(i/size);
    newArr[index]=newArr[index]||[];
    newArr[index].push(v);
  });
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// [["a", "b"],["c", "d"]]

```
### 11.按要求删除指定位数
- slasher([1, 2, 3], 2) 应该返回 [3]
- slasher(["burgers", "fries", "shake"], 1) 应该返回 ["fries", "shake"]


```js
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
```

### 12.字符串包含判断
- 判断第二个字符串的字母是否完全包含于第一个字符串。
- 忽略大小写


```js
function mutation(arr) {
  let isInclude=true;
  [...new Set(arr[1].toLocaleLowerCase())].some(v=>{
    if(!arr[0].toLocaleLowerCase().split('').includes(v)) isInclude=false;
  });
  return isInclude;
}

mutation(["hello", "hey"]);
```

### 13.数组包含检测
- 函数第一个参数为待检测数组
- 之后的参数为将从第一个数组中过滤掉的参数
- 返回的数组无需去重
- destroyer([1, 2, 3, 1, 2, 3], 2, 3) 应该返回 [1, 1].
- destroyer(["tree", "hamburger", 53], "tree", 53) 应该返回 ["hamburger"].


```js
function destroyer(...arr) {
  [arr,...arg]=arr;
  return arr.filter(v=>!arg.includes(v));
}
```
### 14.包含区间检测
- 检测一个值包含于一个数组的第几个区间
- getIndexToIns([10, 20, 30, 40, 50], 35) 应该返回 3
- getIndexToIns([10, 20, 30, 40, 50], 30) 应该返回 2
- getIndexToIns([3, 10, 5], 3) 应该返回 0.


```js
function getIndexToIns(arr, num) {
  return arr.map(v=>v=num<=v?1:0).filter(v=>v===0).length;
}
```
### 15.移位密码

#### String.fromCharCode(num1, ..., numN)

输出一定的数字，将数字转化为Unicode码对应的字符。


```js
String.fromCharCode(65,66,67); //ABC
```

#### str.charCodeAt(index)
返回字符对应的0-65535之间对应的整数。

```js
"ABC".charCodeAt(0) // returns 65:"A"

"ABC".charCodeAt(1) // returns 66:"B"

"ABC".charCodeAt(2) // returns 67:"C"

"ABC".charCodeAt(3) // returns NaN
```

移位密码：对于26个字母，将每个字母对称移位，比如a对应n（第1位对应14位），b对应o（第二位对应第14位）。a对应n相对应的，n也对应a。

- rot13("SERR CVMMN!") 会被加密为 "FREE PIZZA!"
- rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") 会被加密为 "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
```js
function rot13(str) {
str=str.split('');
 str.map((v,i)=>{
    if(/^[a-z]$/i.exec(v)===null) return;
    let index=(v.charCodeAt(0)+13)>90?v.charCodeAt(0)-13:v.charCodeAt(0)+13;
    str[i]=String.fromCharCode(index);
  });
  return str.join('');
}

```
