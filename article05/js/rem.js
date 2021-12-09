!(function () {
    function a() {
        var html = document.documentElement;
        var w = html.getBoundingClientRect().width;
        if (w > 750) {
            w = 750;
        }
        var f = w / 7.5;
        html.style.fontSize = f + "px";
    }
    a();
    var timer;
    window.onresize = function () {
        clearTimeout(timer);
        timer = setTimeout(a, 300);
    }
})();