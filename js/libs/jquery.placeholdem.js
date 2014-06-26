function Placeholdem(e) {
    "use strict";
    !function() {
        for (var e = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !window.requestAnimationFrame; ++i)
            window.requestAnimationFrame = window[n[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[i] + "CancelAnimationFrame"] || window[n[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
            var i = (new Date).getTime(), a = Math.max(0, 16 - (i - e)), l = window.setTimeout(function() {
                n(i + a)
            }, a);
            return e = i + a, l
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }();
    var n = {};
    return n.init = function() {
        if (n.elems = [], e.length)
            for (var i = 0; i < e.length; i++)
                n.elems.push(new n.PlaceholdemElem(e[i]));
        else
            n.elems.push(new n.PlaceholdemElem(e))
    }, n.PlaceholdemElem = function(e) {
        var n = this;
        n.init = function() {
            n.elem = e, n.placeholder = n.elem.getAttribute("placeholder"), n.elem.removeAttribute("placeholder"), n.rAF = null, n.animating = 0, n.elem.value || (n.elem.value = n.placeholder), n.on(n.elem, "focus", n.onFocus), n.on(n.elem, "blur", n.onBlur), n.on(n.elem, "keydown", n.onKeydown)
        }, n.on = function(e, n, i) {
            e.addEventListener ? e.addEventListener(n, i) : e.attachEvent("on" + n, i)
        }, n.onFocus = function() {
            (n.animating || n.elem.value === n.placeholder) && (n.animating = 1, window.cancelAnimationFrame(n.rAF), n.deletePlaceholder())
        }, n.onBlur = function() {
            (n.animating || "" === n.elem.value) && (n.animating = 1, window.cancelAnimationFrame(n.rAF), n.restorePlaceholder())
        }, n.onKeydown = function() {
            n.animating && (n.animating = 0, window.cancelAnimationFrame(n.rAF), n.elem.value = "")
        }, n.deletePlaceholder = function() {
            n.elem.value.length > 0 ? (n.elem.value = n.elem.value.slice(0, -1), n.rAF = window.requestAnimationFrame(n.deletePlaceholder)) : n.animating = 0
        }, n.restorePlaceholder = function() {
            n.elem.value.length < n.placeholder.length ? (n.elem.value += n.placeholder[n.elem.value.length], n.rAF = window.requestAnimationFrame(n.restorePlaceholder)) : n.animating = 0
        }, n.init()
    }, n.init(), n
}