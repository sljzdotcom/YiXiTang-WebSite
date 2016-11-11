/**
 * Created by miller on 11/11/2016.
 */

window.onload = function()
{


}

function getScoll() {
    var viewH = ScollPostion().top;
    if (viewH>86) {
        var obj = document.getElementById("stickmenu");
        obj.className = "stickmenuNew";
    } else if (viewH<86) {
        var obj = document.getElementById("stickmenu");
        obj.className = "stickmenu";
    }
}

function ScollPostion() {//滚动条位置
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return { top: t, left: l, width: w, height: h };
}