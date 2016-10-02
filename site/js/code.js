$(document).ready(function () {

    $('.menu-icon').click(function () {
        if ($('#navigator').css("left") == "-250px") {
            $('#navigator').animate({left: '0px'}, 350);
            // $('.menu-icon').animate({left: '250px'}, 350);
            $('.menu-text').animate({left: '300px'}, 350).empty().text("Close");
        }
        else  {
            $('#navigator').animate({left: '-250px'}, 350);
            // $(this).animate({left: '0px'}, 350);
            $('.menu-text').animate({left: '50px'}, 350).empty().text("Menu");

        }
	});
    $('.menu-icon').click(function () {
	            $(this).toggleClass("on"); });


    $(window).scroll(function() {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 75 ){

    		$('.main-nav').addClass('main-nav__show');
        $('.main-nav__logo').addClass('main-nav__logo-show');
        $('.main-nav__logoFont').addClass('main-nav__logoFont-show');
        $('.menu-icon').addClass('menu-icon__show');

    } else {

      $('.main-nav').removeClass('main-nav__show');
      $('.main-nav__logo').removeClass('main-nav__logo-show');
      $('.main-nav__logoFont').removeClass('main-nav__logoFont-show');
      $('.menu-icon').removeClass('menu-icon__show');

    	};
    });

    $('.main-toggleGreyScale').hover(function() {
      $("img", this).toggleClass('main-imgGreyScale');
    });


});
