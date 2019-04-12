$(document).ready(function(){
    // 让header填满整个窗口
    $('.header').height($(window).height());

    // 控制跳转，其实就是个滑动
    $(".navbar a").click(function(){
        console.log("-->" + $(this).data('value'))
        // $("body,html").animate({
        $([document.documentElement, document.body]).animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    })
})