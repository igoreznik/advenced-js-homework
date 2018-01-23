/**
 * Created by igor.reznik on 23/01/2018.
 */
function defaultFunc(x) { return Math.floor(x); }
var sumFunc = function (cb) {
    if (cb === void 0) { cb = defaultFunc; }
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) {
        return sum + cb(num);
    }, 0);
};
console.log('1: ' + sumFunc(undefined, 3.1, 7.9, 8.5));
console.log('2: ' + sumFunc(function (x) { return x * x; }, 4, 7, 8));
