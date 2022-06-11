// linear interpolation between two values a and b
// u controls amount of a/b and is in range [0.0,1.0]
function do_fade2() {
    el = document.getElementById('hello'); // element
    property = 'background-color';       // fading property
    startColor = { r: 0, g: 0, b: 0 };  // black
    endColor = { r: 100, g: 0, b: 100 };  // magenta
    fade(el, 'background-color', startColor, endColor, 9000);
}

function do_fade() {
    el = document.getElementById('hello'); // element
    property = 'color';       // fading property
    startColor = { r: 0, g: 100, b: 100 };  // aqua
    endColor = { r: 0, g: 128, b: 128 };  // dark turquoise
    fade(el, 'color', startColor, endColor, 9000);
}

lerp = function (a, b, u) {
        return (1 - u) * a + u * b;
};

fade = function (element, property, start, end, duration) {
    var interval = 10;
    var steps = duration / interval;
    var step_u = 1.0 / steps;
    var u = 0.0;
    var theInterval = setInterval(function () {
        if (u >= 1.0) {
            clearInterval(theInterval)
        }
        var r = parseInt(lerp(start.r, end.r, u));
        var g = parseInt(lerp(start.g, end.g, u));
        var b = parseInt(lerp(start.b, end.b, u));
        var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
        el.style.setProperty(property, colorname);
        u += step_u;
    }, interval);
}