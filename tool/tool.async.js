/*
*Created by Steven on 12/28/2017
*/

/*
* 原生js实现sleep函数，会导致CPU飙升
* 原理：根据时间毫秒数自增阻塞进程
* */
function sleep(sleepTime) {
    for(var start = +new Date; +new Date - start <= sleepTime;) {}
}
var t1 = +new Date;
sleep(3000);
var t2 = +new Date;
console.log(t2 - t1);

/*
* promise+setTimeout实现异sleep函数
* 原理：Promise中使用setTimeout阻塞进程
* */
const sleep=time=> {new Promise(resolve => setTimeout(resolve, time))}


const t1 = +new Date;
sleep(3000).then(() => {
    const t2 = +new Date;
    console.log(t2 - t1);
});

/*
* Generator实现sleep函数
* */

function sleep(delay) {
    return function(cb) {
        setTimeout(cb.bind(this), delay)
    };
}

function* genSleep() {
    const t1 = +new Date()
    yield sleep(3000)
    const t2 = +new Date()
    console.log(t2 - t1)
}

async(genSleep)

function async(gen) {
    const iter = gen()
    function nextStep(it) {
        if (it.done) return
        if (typeof it.value === "function") {
            it.value(function(ret) {
                nextStep(iter.next(ret))
            })
        } else {
            nextStep(iter.next(it.value))
        }
    }
    nextStep(iter.next())
}

/*
* Async/Await 实现sleep函数
* */

function sleep(delay) {
    return new Promise(reslove => {
        setTimeout(reslove, delay)
    })
}

!async function test() {
    const t1 = +new Date();
    await sleep(3000);
    const t2 = +new Date();
    console.log(t2 - t1);
}();

