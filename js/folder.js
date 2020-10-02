$(function(){
    'use strict';

    //Trigger Nice Scroll plugin
    $('html').niceScroll({
        cursorcolor:'#f45e0e',

        cursorwidth:'8px'
    });

    $('header').height($(window).height());

    $('header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        },1000)
    });
    $('header .buttons button:first').click(function(){
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        },1500)
    });
    $('header .buttons button:last').click(function(){
        $('html, body').animate({
            scrollTop: $('.our-works').offset().top
        },1000)
    });


    $('.our-works .show-more').click(function(){
        $('.our-works .hidden').fadeIn(1000);
       

    });

    //Check Testimonials

    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow =$('.testim .fa-chevron-right');

    function checkClients(){

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();


    }
checkClients();
    

    $('.testim i').click(function(){
        $(this).hasClass('fa-chevron-right') 

        ? $('.testim .active').fadeOut(100,function(){
            $(this).removeClass('active').next('.client').addClass('active').fadeIn();
            checkClients()
        })

        : $('.testim .active').fadeOut(100,function(){
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            checkClients()
        });



    })



})