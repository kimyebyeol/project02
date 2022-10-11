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
        header.stop().animate({height:submenuHeight+headerHeight+50},500) /* +50 은 투뎁스메뉴의 여백 */ 
    })
    firstmanu.mouseleave(function(){
        header.stop().animate({height:headerHeight},500)
        $(this).find('ul').hide();
        $('.overlay').removeClass('show');
    })

})