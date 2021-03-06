const toString = Object.prototype.toString;

const kindOf=val=> {
	// 原始数据类型
	if(typeof val === 'undefined') {
		return 'undefined';
	}
	if(val === null) {
		return 'null';
	}
	if(val === true || val === false || val instanceof Boolean) {
		return 'boolean';
	}
	if(typeof val === 'string' || val instanceof String) {
		return 'string';
	}
	if(typeof val === 'number' || val instanceof Number) {
		return val === val ? 'number' : 0 / 0;
	}

	// 函数
	if(typeof val === 'function' || val instanceof Function) {
		return 'function';
	}

	// 数组
	if(typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
		return 'array';
	}

	//转化为字符串之前判断对象是否为Date【日期对象】与RegExp【正则表达式】的实例对象
	if(val instanceof RegExp) {
		return 'regexp';
	}
	if(val instanceof Date) {
		return 'date';
	}

	// 其他对象
	var type = toString.call(val);

	if(type === '[object RegExp]') {
		return 'regexp';
	}
	if(type === '[object Date]') {
		return 'date';
	}
	if(type === '[object Arguments]') {
		return 'arguments';
	}
	if(type === '[object Error]') {
		return 'error';
	}

	// es6对象: Map, WeakMap, Set, WeakSet
	if(type === '[object Set]') {
		return 'set';
	}
	if(type === '[object WeakSet]') {
		return 'weakset';
	}
	if(type === '[object Map]') {
		return 'map';
	}
	if(type === '[object WeakMap]') {
		return 'weakmap';
	}
	if(type === '[object Symbol]') {
		return 'symbol';
	}

	// 数组类型
	if(type === '[object Int8Array]') {
		return 'int8array';
	}
	if(type === '[object Uint8Array]') {
		return 'uint8array';
	}
	if(type === '[object Uint8ClampedArray]') {
		return 'uint8clampedarray';
	}
	if(type === '[object Int16Array]') {
		return 'int16array';
	}
	if(type === '[object Uint16Array]') {
		return 'uint16array';
	}
	if(type === '[object Int32Array]') {
		return 'int32array';
	}
	if(type === '[object Uint32Array]') {
		return 'uint32array';
	}
	if(type === '[object Float32Array]') {
		return 'float32array';
	}
	if(type === '[object Float64Array]') {
		return 'float64array';
	}

	// 必定是个简单对象
	return 'object';
};

module.exports=kindOf;