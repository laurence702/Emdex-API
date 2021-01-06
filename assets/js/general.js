$(function() {
    $('.show-mobile-navig').click(function() {
        $('body').addClass('show-mobile-menu');
    });

    $('.close-mobile-navig').click(function() {
        $('body').removeClass('show-mobile-menu');
    });

    $('.header-nav-dropdown > a').hover(function() {
        // over
        // alert('shown')
        $(this).addClass('show');
        $(this).sibling('.dropdown-menu').addClass('show');
    }, function() {
        // out
        // alert('out')
        $(this).removeClass('show');
        $(this).sibling('.dropdown-menu').removeClass('show');
    });
})