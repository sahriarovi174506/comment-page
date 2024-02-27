(function ($) {
    "use strict";

    $(window).on('load', function () {
        // ------- Prealoder ------
        $("#preloader").delay(300).fadeOut("slow");
    });


    $(document).ready(function () {


        // ------------- sticky header --------------

        function sticky_header() {
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();




        // ------------- back to top --------------

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });




        // ------------- Hamburger menu --------------

        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');

            $('.menu').toggleClass('mobile_menu_active');
        });



        // Comment Functions
        $('.see_more_replies').on('click', function () {
            $(this).closest('.comment_box').find('.reply_box').addClass('active');
            $(this).closest('.comment_box').addClass('reply_on');
        });



        // first_step_reply
        $('.first_step_reply .reply').one('click', function () {
            $(this).closest('.comment_box').find('.reply_box').addClass('active');
            var thisComBox = $(this).closest('.comment_box');
            $('.comment_box').not(thisComBox).removeClass('reply_box_active');
            $(this).closest('.comment_box').addClass('reply_on reply_box_active');
            var main_cont = $(this).closest('.comment_box > .comment_main > .comment_cont1');
            var getname = $(main_cont).find(".comment_top a").html();

            var commentCapHTML = '<div class="comment_box form_comment_box show reply_box active d-flex align-items-start pb_25 pt_25">' +
                '<div class="comment_img mr_15">' +
                '<span class="comment_icon f-500">N</span>' +
                '</div>' +
                '<div class="comment_main">' +
                '<div class="comment_cont">' +
                '<form action="#" class="comment_form">' +
                '<div class="form_group pb_30">' +
                '<label class="text_sm" for="Name">Name</label>' +
                '<input type="text" class="form_field text_sm pb_15 pt_15 pl_15" name="Name" required>' +
                '</div>' +
                '<div class="form_group pb_30">' +
                '<label class="text_sm" for="Email">Email</label>' +
                '<input type="text" class="form_field text_sm pb_15 pt_15 pl_15" name="Email" required>' +
                '</div>' +
                '<div class="form_group pb_30">' +
                '<label for="reply"><span class=\'f-700\'>' + getname + '</span> Your comment</label>' +
                '<textarea name="reply" class="form_field text_sm pb_15 pt_15 pl_15"></textarea>' +
                '</div>' +
                '<div class="d-flex justify-content-end">' +
                '<button type="submit" class="button ml-auto">Submit comment</button>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '</div>';
            $(main_cont).append(commentCapHTML);
            $(main_cont).find('.see_more_replies').addClass('hide');
            $(this).addClass('active');
        });

        $('.third_step_reply .reply').one('click', function () {
            $(this).closest('.comment_box').find('.reply_box').addClass('active');
            var thisComBox = $(this).closest('.comment_box');
            $('.comment_box').not(thisComBox).removeClass('reply_box_active');
            $(this).closest('.comment_box').addClass('reply_on reply_box_active');
            var main_cont = $(this).closest('.comment_box_serial_2');
            var getname = $(main_cont).find(".comment_top a").html();

            var commentCapHTML = '<div class="comment_box form_comment_box show comment_box_serial_2 third_step_reply reply_on reply_inner reply_line_one reply_box d-flex align-items-start pt_25 active reply_box_active">' +
                '<div class="comment_img mr_15">' +
                '<span class="comment_icon f-500">N</span>' +
                '</div>' +
                '<div class="comment_main">' +
                '<div class="comment_cont">' +
                '<form action="#" class="comment_form">' +
                '<div class="form_group pb_30">' +
                '<label class="text_sm" for="Name">Name</label>' +
                '<input type="text" class="form_field text_sm pb_15 pt_15 pl_15" name="Name" required>' +
                '</div>' +
                '<div class="form_group pb_30">' +
                '<label class="text_sm" for="Email">Email</label>' +
                '<input type="text" class="form_field text_sm pb_15 pt_15 pl_15" name="Email" required>' +
                '</div>' +
                '<div class="form_group pb_30">' +
                '<label for="reply"><span class=\'f-700\'>' + getname + '</span> Your comment</label>' +
                '<textarea name="reply" class="form_field text_sm pb_15 pt_15 pl_15"></textarea>' +
                '</div>' +
                '<div class="d-flex justify-content-end">' +
                '<button type="submit" class="button ml-auto">Submit comment</button>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '</div>';
            $(main_cont).after(commentCapHTML);
            $(main_cont).find('.see_more_replies').addClass('hide');
            $(this).addClass('active');
        });

        $('.second_step_reply .reply').one('click', function () {
            $(this).closest('.comment_box').find('.reply_box').addClass('active');
            var thisComBox = $(this).closest('.comment_box');
            $('.comment_box').not(thisComBox).removeClass('reply_box_active');
            $(this).closest('.comment_box').addClass('reply_on reply_box_active');
            var main_cont = $(this).closest('.comment_box_serial_1 .comment_cont2');
            var getname = $(main_cont).find(".comment_top a").html();

            var commentCapHTML = '<div class="comment_box form_comment_box show comment_box_serial_2 third_step_reply reply_on reply_inner reply_line_one reply_box d-flex align-items-start pt_25 active reply_box_active">' +
                '<div class="comment_img mr_15">' +
                '<span class="comment_icon f-500">N</span>' +
                '</div>' +
                '<div class="comment_main">' +
                '<div class="comment_cont">' +
                '<form action="#" class="comment_form">' +
                '<div class="form_group pb_30">' +
                '<label class="text_sm" for="Name">Name</label>' +
                '<input type="text" class="form_field text_sm pb_15 pt_15 pl_15" name="Name" required>' +
                '</div>' +
                '<div class="form_group pb_30">' +
                '<label class="text_sm" for="Email">Email</label>' +
                '<input type="text" class="form_field text_sm pb_15 pt_15 pl_15" name="Email" required>' +
                '</div>' +
                '<div class="form_group pb_30">' +
                '<label for="reply"><span class=\'f-700\'>' + getname + '</span> Your comment</label>' +
                '<textarea name="reply" class="form_field text_sm pb_15 pt_15 pl_15"></textarea>' +
                '</div>' +
                '<div class="d-flex justify-content-end">' +
                '<button type="submit" class="button ml-auto">Submit comment</button>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '</div>';
            $(main_cont).after(commentCapHTML);
            $(main_cont).find('.see_more_replies').addClass('hide');
            $(this).addClass('active');
        });


        // 
        $('.button').on('click', function () {
            $(this).closest('.form_comment_box').remove();
        });


        $('.load_more').on('click', function () {
            $('.more').toggleClass("show");
            // $('.comment_box.more').toggleClass("more");
        });


        // -------------------- blog_slider --------------------- //
        $(".blog_slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });


        // Timeline area
        $('.page_nav').click(function (event) {
            event.preventDefault();
            var clickedId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(clickedId).offset().top
            }, 1000); // Adjust the duration as needed
        });

        // Scroll function to update navigation based on scroll position
        $(window).scroll(function () {
            var scrollPosition = $(this).scrollTop();
            $('.timeline_textbox').each(function () {
                var top = $(this).offset().top - 5;
                var bottom = top + $(this).outerHeight();
                if (scrollPosition >= top && scrollPosition <= bottom) {
                    var id = $(this).attr('id');
                    $('.page_nav').removeClass('active');
                    $('#' + id + '_nav').addClass('active');
                    $('.page_navs').removeClass().addClass('page_navs').addClass(id);
                }
            });
        });

        // Optional: Highlight the active section when the page loads
        var scrollPosition = $(window).scrollTop();
        $('.timeline_textbox').each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            if (scrollPosition >= top && scrollPosition <= bottom) {
                var id = $(this).attr('id');
                $('.page_nav').removeClass('active');
                $('#' + id + '_nav').addClass('active');
                $('.page_navs').removeClass().addClass('page_navs').addClass(id);
            }
        });

    });

})(jQuery);