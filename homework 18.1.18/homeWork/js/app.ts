/**
 * Created by igor.reznik on 23/01/2018.
 */
function defaultFunc(x) {return Math.floor(x)}

const sumFunc = function(cb = defaultFunc, ...numbers: number[]): number {
    return numbers.reduce(
    function(sum: number, num: number) {
        return sum + cb(num);
    }, 0);
};

console.log('1: ' + sumFunc(undefined,3.1,7.9,8.5));
console.log('2: ' + sumFunc((x: number): number => x * x, 4, 7, 8));