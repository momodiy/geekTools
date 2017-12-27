/*
*Created by Steven on 12/27/2017
*/
/*
* 获取滚动位置
* */

const getScrollPos = (el = window) =>
    ({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});
// getScrollPos() -> {x: 0, y: 200}

/*
* 滚动到顶部
* 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离
* window.requestAnimationFrame（）来滚动
* */
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
// scrollToTop();
