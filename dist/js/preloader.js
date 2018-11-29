$(document).ready(function() {
    $(".dws-progress-bar").circularProgress({
        color: "aqua",
        line_width: 15,
        width: "350px",
        height: "350px",
        percent: 0,
        counter_clockwise: false
    }).circularProgress('animate', 100, 2500);
});

$(window).on('load', function() {
    setTimeout(function(){
        let $preloader = $('#preloader');
        $preloader.delay(1800).fadeOut('slow');
    }, 1400);
});