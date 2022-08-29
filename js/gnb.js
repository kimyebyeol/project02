$(function(){
    //변수
    var firstmanu=$('nav>ul>li'),
    header=$('header'),
    headerHeight=header.height();

    firstmanu.mouseenter(function(){
        firstmanu.find('ul').hide();
        $(this).find('ul').show();
        $('.overlay').addClass('show');
        var submenuHeight=$(this).find('ul').height();
        header.stop().animate({height:submenuHeight+headerHeight},1000) /* 1000은 애니메이션의 지속시간=1초 */ 
    })
    firstmanu.mouseleave(function(){
        header.stop().animate({height:headerHeight},1000)
        $(this).find('ul').hide();
        $('.overlay').removeClass('show');
    })

})