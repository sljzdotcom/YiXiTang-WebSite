/**
 * Created by miller on 11/11/2016.
 */

window.onload = function()
{


}

//============  stickmenu  ============
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


//============  判断页面滚动条所处位置  ============
function ScollPostion() {
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


//============  定义 zeroModal  ============
function _iframe() {
    zeroModal.show({
        title: '第二种方式，可以调取任意页面！',
        iframe: true,
        url: 'http://www.baidu.com',
        width: '80%',
        height: '80%',
        cancel: true
    });
}

function setMouseOver(getShowid) {
    var no = getShowid;

    var show = 'productItem2Arrow' + no.toString();
    var Arrow = document.getElementById(show);
    Arrow.style.display='block';

    var pp = 'productItem2P' + no.toString();
    var p = document.getElementById(pp);
    p.style.marginTop = '50px';

}

function setMouseOut(getShowid) {
    var no = getShowid;

    var show = 'productItem2Arrow' + no.toString();
    var Arrow = document.getElementById(show);
    Arrow.style.display='none';

    var pp = 'productItem2P' + no.toString();
    var p = document.getElementById(pp);
    p.style.marginTop = '80px';
    p.addClass('animated fadeInUp');

}