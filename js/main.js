/**
 * Created by miller on 11/11/2016.
 */

window.onload = function()
{
    var PageName = GetPageurl()[0].toString().split(".")[0].toString();
    var obj = document.getElementById('sectionBigPic');
    switch(PageName)
    {
        case 'enterprice':
            obj.style.background="url(images/enterprice-1.png) no-repeat";
            break;
        case 'product':
            obj.style.background="url(images/product-1.jpg) no-repeat";
            break;
        case 'news':
            obj.style.background="url(images/news-1.png) no-repeat";
            break;
        case 'contact':
            obj.style.background="url(images/contact-1.png) no-repeat";
            break;
        default:
            obj.style.background="url(images/enterprice-1.png) no-repeat";
    }
    obj.style.backgroundSize="cover";
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

//============  定义 产品中心的箭头显示  ============
function setMouseOver(getShowid) {
    var no = getShowid;

    var show = 'productItem2Arrow' + no.toString();
    var Arrow = document.getElementById(show);
    Arrow.style.display='block';

    var pp = 'productItem2P' + no.toString();
    var p = document.getElementById(pp);
    p.style.marginTop = '50px';

}
//============  定义 产品中心的箭头隐藏  ============
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

//============  定义 轮播图片的箭头显示  ============
function setSwiperIn() {
    var prev = document.getElementById('swiper-button-prev');
    prev.style.display = 'inline';
    var next = document.getElementById('swiper-button-next');
    next.style.display = 'inline';
}
//============  定义 轮播图片的箭头隐藏  ============
function setSwiperOut() {
    var prev = document.getElementById('swiper-button-prev');
    prev.style.display = 'none';
    var next = document.getElementById('swiper-button-next');
    next.style.display = 'none';
}


//============  定义 获取页面文件名和参数   ============
function GetPageurl() {
    var url=window.location.href;//获取完整URL地址
    var tmp= new Array();//临时变量，用于保存分割字符串
    tmp=url.split("/");//按照"/"分割
    var cc = tmp[tmp.length-1];//获取最后一部分，即文件名和参数
    tmp=cc.split("?");//把参数和文件名分割开
    return tmp;//返回值
}


//============  定义 企业介绍 子栏目切换图片   ============
function switchSection(getID) {
    var switchid = getID.toString();
    switch(switchid)
    {
        case '1':
            //企业介绍
            document.getElementById('switchImage1').src="images/tt1-2.png";
            document.getElementById('switchImage1').onmouseout = null;
            document.getElementById('switchImage2').src="images/tt2-1.png";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt2-2.png'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt2-1.png'};
            document.getElementById('switchImage3').src="images/tt3-1.png";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt3-2.png'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt3-1.png'};
            document.getElementById('switchImage4').src="images/tt4-1.png";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt4-2.png'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt4-1.png'};
            document.getElementById('switchImage5').src="images/tt5-1.png";
            document.getElementById('switchImage5').onmouseover = function(){this.src='images/tt5-2.png'};
            document.getElementById('switchImage5').onmouseout = function(){this.src='images/tt5-1.png'};
            break;
        case '2':
            //企业文化
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt1-1.png";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt1-2.png'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt1-1.png'};
            document.getElementById('switchImage2').src="images/tt2-2.png";
            document.getElementById('switchImage2').onmouseout = null;
            document.getElementById('switchImage3').src="images/tt3-1.png";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt3-2.png'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt3-1.png'};
            document.getElementById('switchImage4').src="images/tt4-1.png";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt4-2.png'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt4-1.png'};
            document.getElementById('switchImage5').src="images/tt5-1.png";
            document.getElementById('switchImage5').onmouseover = function(){this.src='images/tt5-2.png'};
            document.getElementById('switchImage5').onmouseout = function(){this.src='images/tt5-1.png'};
            break;
        case '3':
            //企业荣誉
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt1-1.png";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt1-2.png'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt1-1.png'};
            document.getElementById('switchImage2').src="images/tt2-1.png";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt2-2.png'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt2-1.png'};
            document.getElementById('switchImage3').src="images/tt3-2.png";
            document.getElementById('switchImage3').onmouseout = null;
            document.getElementById('switchImage4').src="images/tt4-1.png";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt4-2.png'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt4-1.png'};
            document.getElementById('switchImage5').src="images/tt5-1.png";
            document.getElementById('switchImage5').onmouseover = function(){this.src='images/tt5-2.png'};
            document.getElementById('switchImage5').onmouseout = function(){this.src='images/tt5-1.png'};
            break;
        case '4':
            //企业发展历程
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt1-1.png";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt1-2.png'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt1-1.png'};
            document.getElementById('switchImage2').src="images/tt2-1.png";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt2-2.png'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt2-1.png'};
            document.getElementById('switchImage3').src="images/tt3-1.png";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt3-2.png'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt3-1.png'};
            document.getElementById('switchImage4').src="images/tt4-2.png";
            document.getElementById('switchImage4').onmouseout = null;
            document.getElementById('switchImage5').src="images/tt5-1.png";
            document.getElementById('switchImage5').onmouseover = function(){this.src='images/tt5-2.png'};
            document.getElementById('switchImage5').onmouseout = function(){this.src='images/tt5-1.png'};
            break;
        case '5':
            //社会责任
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt1-1.png";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt1-2.png'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt1-1.png'};
            document.getElementById('switchImage2').src="images/tt2-1.png";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt2-2.png'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt2-1.png'};
            document.getElementById('switchImage3').src="images/tt3-1.png";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt3-2.png'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt3-1.png'};
            document.getElementById('switchImage4').src="images/tt4-1.png";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt4-2.png'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt4-1.png'};
            document.getElementById('switchImage5').src="images/tt5-2.png";
            document.getElementById('switchImage5').onmouseout = null;
            break;
        default:

    }
}


//============  定义 产品 子栏目切换图片   ============
function switchSectionProduct(getID) {
    var switchid = getID.toString();
    switch(switchid)
    {
        case '1':
            //甘草系列
            document.getElementById('switchImage1').src="images/tt11-2.jpg";
            document.getElementById('switchImage1').onmouseout = null;
            document.getElementById('switchImage2').src="images/tt12-1.jpg";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt12-2.jpg'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt12-1.jpg'};
            document.getElementById('switchImage3').src="images/tt13-1.jpg";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt13-2.jpg'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt13-1.jpg'};
            document.getElementById('switchImage4').src="images/tt14-1.jpg";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt14-2.jpg'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt14-1.jpg'};
            break;
        case '2':
            //原料药
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt11-1.jpg";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt11-2.jpg'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt11-1.jpg'};
            document.getElementById('switchImage2').src="images/tt12-2.jpg";
            document.getElementById('switchImage2').onmouseout = null;
            document.getElementById('switchImage3').src="images/tt13-1.jpg";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt13-2.jpg'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt13-1.jpg'};
            document.getElementById('switchImage4').src="images/tt14-1.jpg";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt14-2.jpg'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt14-1.jpg'};
            break;
        case '3':
            //健康产品系列
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt11-1.jpg";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt11-2.jpg'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt11-1.jpg'};
            document.getElementById('switchImage2').src="images/tt12-1.jpg";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt12-2.jpg'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt12-1.jpg'};
            document.getElementById('switchImage3').src="images/tt13-2.jpg";
            document.getElementById('switchImage3').onmouseout = null;
            document.getElementById('switchImage4').src="images/tt14-1.jpg";
            document.getElementById('switchImage4').onmouseover = function(){this.src='images/tt14-2.jpg'};
            document.getElementById('switchImage4').onmouseout = function(){this.src='images/tt14-1.jpg'};
            break;
        case '4':
            //中药饮品系列
            document.getElementById('iframeBlock').scrolling="yes";
            document.getElementById('switchImage1').src="images/tt11-1.jpg";
            document.getElementById('switchImage1').onmouseover = function(){this.src='images/tt11-2.jpg'};
            document.getElementById('switchImage1').onmouseout = function(){this.src='images/tt11-1.jpg'};
            document.getElementById('switchImage2').src="images/tt12-1.jpg";
            document.getElementById('switchImage2').onmouseover = function(){this.src='images/tt12-2.jpg'};
            document.getElementById('switchImage2').onmouseout = function(){this.src='images/tt12-1.jpg'};
            document.getElementById('switchImage3').src="images/tt13-1.jpg";
            document.getElementById('switchImage3').onmouseover = function(){this.src='images/tt13-2.jpg'};
            document.getElementById('switchImage3').onmouseout = function(){this.src='images/tt13-1.jpg'};
            document.getElementById('switchImage4').src="images/tt14-2.jpg";
            document.getElementById('switchImage4').onmouseout = null;
            break;
        default:

    }
}