const type = require('../tool/dataType/tool.dataType.judge');
let a = [1, 2, 3, 4, 5, 6, 7],
    b = new Set(),
    c = new RegExp(),
    d = new Date(),
    e = Infinity - Infinity;
console.log(type(a) === 'array');
console.log(type(b) === 'set');
console.log(type(c) === 'regexp');
console.log(type(d) === 'date');
console.log(type(e).toString() === 'NaN');
