/*
* Author: stevenlee
* Date: 2018/5/14
* Description: 在箭头函数中优雅地使用this关键字的方法
*/

const fn = (...args) => {
    console.log(this)
    console.log(args)
}

fn.bind(this)('param1', 'param2')
fn.apply(this, ['param1', 'param2'])
fn.call(this, 'param1', 'param2')