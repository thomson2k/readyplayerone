$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.navbar-header').addClass('sticky');
    } else {
        $('.introduction').removeClass('sticky');
    }
});
//smooth scolling
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
$('.mobile-toggle').click(function() {
    if ($('.navbar-header').hasClass('open-nav')) {
        $('.navbar-header').removeClass('open-nav');
    } else {
        $('.navbar-header').addClass('open-nav');
    }
});

$('.navbar-header li a').click(function() {
    if ($('.navbar-header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.navbar-header').removeClass('open-nav');
    }
});
///animated navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function myFunction(x) {
    x.classList.toggle("change");
}
//scrolling
if ($('#back-to-top').length) {
    var scrollTrigger = 500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
