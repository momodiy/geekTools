const _=require('lodash');

const upset = () => {
    Array.prototype.upset = function () {
        return this.sort(() => Math.random() - 0.5)
    };
};
module.exports=upset;