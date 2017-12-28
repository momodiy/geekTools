/*
*Created by Steven on 12/28/2017
*/

/*
* get timestamp
* JavaScript 引擎内部转换为原始值 ToPrimitive(obj,preferredType) 函数接受两个参数，
* 第一个 obj 为被转换的对象，第二个preferredType 为希望转换成的类型（默认为空，接受的值为 Number 或 String）
* 在执行 ToPrimitive(obj,preferredType) 时如果第二个参数为空并且 obj 为 Date 的实例时，此时 preferredType 会被设置为 String，
* 其他情况下 preferredType 都会被设置为Number 如果 preferredType 为 Number
* */
var timestamp=new Date().getTime();

var timestamp = (new Date()).valueOf();

var timestamp = +new Date();

