/**
 * Created by igor.reznik on 15/01/2018.
 */
var doc = {
    ready: function(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
};
doc.ready(function() {
    let currentDate = new Date();
    function checkDate(date) {
        return new Promise(function(resolve,reject) {
            let sec = date.getSeconds();
            if(sec%2 === 0) {
                resolve("precess sucess! " + date);
            }
            else {
                reject("You need to activate Promise again " + date);

            }
        });
    }
    let resolveAction = function(msg) {
        console.log("resolve msg", msg);
    };
    let rejectAction = function(msg) {

        console.log("reject msg", msg);
        let newDate = new Date();
        //  checkDate(newDate);
        return setTimeout(function() {
            checkDate(newDate).then(resolveAction).catch(rejectAction);
        },1000);

    };

    checkDate(currentDate).then(resolveAction).catch(rejectAction);
});

