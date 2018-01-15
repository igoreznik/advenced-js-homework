var interBreakPoints = [600,768,1280,1440];

var inter = {//
    ready: function(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    },
    s: function(selector) {
        return document.querySelectorAll(selector);
    },
    getFile: function(url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var resp = request.responseText;
            } else {
                console.log('We reached our target server, but it returned an error');
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
        };

        request.send();
        return request;
    },
    //
    //
    //
    // Check the size of an element and place a size attribute on the selected element.
    //
    //
    //
    sizeCheck: function(element){
        console.log('Checked size!');
        var $e = inter.s(element)[0];
        var media = interBreakPoints,
            ww = parseInt($e.offsetWidth);
        if (ww <= media[0]) {
            $e.setAttribute('mq','t');
        } else if ((ww > media[0]) && (ww < media[1])) {
            $e.setAttribute('mq','s');
        } else if ((ww > media[1]) && (ww < media[2])) {
            $e.setAttribute('mq','m');
        } else if ((ww > media[2]) && (ww < media[3])) {
            $e.setAttribute('mq','l');
        } else if (ww > media[3]) {
            $e.setAttribute('mq','x');
        }
    },
    sizeEvent: function(element) {
        var elem = element;
        window.addEventListener('resize',function() {
            inter.sizeCheck(elem);
        })
    }
}




