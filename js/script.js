$(document).ready(function() {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        auto: true,
    });

$('.menu-toggle').click(function() {
    $('#main-nav').slideToggle('fast');
});

});