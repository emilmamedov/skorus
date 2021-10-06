$(function() {

    //О Компании меню
    $('.have_drop img').on('click', function() {
        $('.have_drop img').toggleClass('active');
        $('.have_drop .drop').toggleClass('active');
    });

    //Связаться с нами
    $('.contact_us-title').on('click', function() {
        $('.contact_us-content').toggleClass('active');
        $('.contact_us-title .arrow_down').toggleClass('active');
    });

    // Каталог меню
    $('.have_menu-name').on('click', function() {
        let orderContent = $(this).closest('.have_menu').find('.menu_drop');
        orderContent.slideToggle();
    });

    // меню при ресайзе
    let mobile = false;
    let auth = $('.auth');
    let allProduct = $('.all_product');
    let popularAllProduct = $('.popular_all-product');
    let meatAllProduct = $('.meat_all-product');
    let drinkAllProduct = $('.drink_all-product');
    let productName = $('.zakaz_body-name');
    let productName1 = $('.zakaz_body-name1');
    let productHead = $('.zakaz_head');
    let formHeart = $('.tovar_price-content .card_heart')

    if ($(window).width() < 1020) {
        mobile = true;
        $('.zakaz_body-content').prepend(productName);
        $('.zakaz_body-content1').prepend(productName1);
        $('.zakaz_body-wrap').prepend(productHead);
    }

    if ($(window).width() < 992) {
        mobile = true;
        $('.tovar_price-wrapper .number').append(formHeart);
    }

    if ($(window).width() < 768) {

        mobile = true;
        $('header .menu').append(auth);
        $('.section_title').append(allProduct);
        $('.popular_section-title').append(popularAllProduct);
        $('.meat_section-title').append(meatAllProduct);
        $('.drink_section-title').append(drinkAllProduct);
    }

    if ($(window).width() < 600) {
        mobile = true;

    }

    $(window).on('resize', function() {

        if ($(window).width() < 1020) {
            // mobile = true;
            $('.zakaz_body-wrap').prepend(productHead);
            $('.zakaz_body-content').prepend(productName);
            $('.zakaz_body-content1').prepend(productName1);
        }

        if ($(window).width() >= 1020) {
            // mobile = false;
            $('.zakaz_left').prepend(productHead);
            $('.zakaz_item-wrap').append(productName);
            $('.zakaz_item-wrap1').append(productName1);
        }

        if ($(window).width() < 992) {
            // mobile = true;
            $('.tovar_price-wrapper .number').append(formHeart);
        }

        if ($(window).width() >= 992) {
            // mobile = false;
            $('.tovar_price-content').append(formHeart);
        }

        if ($(window).width() < 768 && !mobile) {
            mobile = true;
            $('header .menu').append(auth);
            $('.section_title').append(allProduct);
            $('.popular_section-title').append(popularAllProduct);
            $('.meat_section-title').append(meatAllProduct);
            $('.drink_section-title').append(drinkAllProduct);
        }

        if ($(window).width() >= 768 && mobile) {
            mobile = false;
            $('header .container').append(auth);
            $(this, 'header .menu').removeClass('active');
            $('.discount_section .container').append(allProduct);
            $('.popular .container').append(popularAllProduct);
            $('.catalog_meat .container').append(meatAllProduct);
            $('.catalog_drink .container').append(drinkAllProduct);
        }
    });

    // Banner слайдер
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Нам доверяют слайдер
    $('.we_trust-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 705,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    // Отзывы Слайдер
    $('.reviews_slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //Товар Слайдер
    $('.tovar_slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.tovar_slider-bottom'
    });
    $('.tovar_slider-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.tovar_slider-top'
    });


    // Product счетчик
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // Свич Блок Контакты
    $('[data-switch]').on('click', function(e) {
        $('[data-switch], [data-switched]').removeClass("active");
        let s = $(this).attr("data-switch");
        $(this).addClass("active");
        $('[data-switched=' + s + ']').addClass("active")
    });

    // Модалка
    document.querySelectorAll("[data-btn]").forEach(item => {
        item.addEventListener('click', function() {
            document.body.style.overflow = "hidden";
            let dataValue = this.getAttribute("data-btn");
            let modal = document.querySelector('.' + dataValue)
            modal.style.display = 'flex';
            modal.style.visibility = 'visible';
        });
    });
    document.querySelectorAll('.modal').forEach(function(item) {
        item.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('close')) {
                document.body.style.overflow = "visible";
                this.style.display = "none";

            }
        });
    });

    //Аккардион
    $('.table_body img').on('click', function() {
        this.classList.toggle('active');
        let orderContent = $(this).closest('.table_body-content').find('.table_body-accordion');
        orderContent.slideToggle();

    });
    $('.filter_title').on('click', function() {
        $('.filter_title-wrap .filter_arrow').toggleClass('active');
        $('.filter_select-container').slideToggle();
    });

    $('.manufacturer_title').on('click', function() {
        $('.manufacturer_wrap .filter_arrow').toggleClass('active');
        $('.manufacturer_content').slideToggle();
    });
    $('.brand_title').on('click', function() {
        $('.brand_wrap .filter_arrow').toggleClass('active');
        $('.brand_content').slideToggle();
    });
    $('.country_title').on('click', function() {
        $('.country_wrap .filter_arrow').toggleClass('active');
        $('.country_content').slideToggle();
    });
    $('.typeProduct_title').on('click', function() {
        $('.typeProduct_wrap .filter_arrow').toggleClass('active');
        $('.typeProduct_content').slideToggle();
    });


    // SELECT
    $('.manufacturer_title').on('click', function() {
        $('.select .list').slideToggle();
    });
    $('.select .list a').on('click', function(e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select').find('.visual_part span').text(a)
    });


    $('.brand_title').on('click', function() {
        $('.select1 .list1').slideToggle();
    });
    $('.select1 .list1 a').on('click', function(e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select1').find('.visual_part1 span').text(a)
    });


    $('.country_title').on('click', function() {
        $('.select2 .list2').slideToggle();
    });
    $('.select2 .list2 a').on('click', function(e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select2').find('.visual_part2 span').text(a)
    });


    $('.typeProduct_title').on('click', function() {
        $('.select3 .list3').slideToggle();
    });
    $('.select3 .list3 a').on('click', function(e) {
        e.preventDefault();
        a = $(this).text();
        $(this).closest('.select3').find('.visual_part3 span').text(a)
    });

    // Каталог position
    panelMenu = $('.js-panel-menu');
    offset = panelMenu.width() + 333;
    $('.catalog_menu-list  .have_menu').on('mouseenter mouseleave', function() {
        var submenu = $(this).children('.js-multi-submenu'),
            position = $(this).position();

        if (typeof position != 'undefined') {
            if (panelMenu.height() <= (position.top + submenu.height()) && (position.top - submenu.height()) > 0) {
                submenu.css({ 'top': position.top - submenu.height() + 40, 'left': offset });
            } else {
                submenu.css({ 'top': position.top, 'left': offset });
            }
        }
    });


    // Input вычисление
    $('.quantity-button').on('click', function(e) {
        let summ = $('.value').val() * $('.summ').data('summ');
        $('.summ').html(summ.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button1').on('click', function() {
        let summ1 = $('.value1').val() * $('.summ1').data('summ');
        $('.summ1').html(summ1.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button2').on('click', function() {
        let summ2 = $('.value2').val() * $('.summ2').data('summ');
        $('.summ2').html(summ2.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button3').on('click', function() {
        let summ3 = $('.value3').val() * $('.summ3').data('summ');
        $('.summ3').html(summ3.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button4').on('click', function() {
        let summ4 = $('.value4').val() * $('.summ4').data('summ');
        $('.summ4').html(summ4.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button5').on('click', function() {
        let summ5 = $('.value5').val() * $('.summ5').data('summ');
        $('.summ5').html(summ5.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button6').on('click', function() {
        let summ6 = $('.value6').val() * $('.summ6').data('summ');
        $('.summ6').html(summ6.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button7').on('click', function() {
        let summ7 = $('.value7').val() * $('.summ7').data('summ');
        $('.summ7').html(summ7.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button8').on('click', function() {
        let summ8 = $('.value8').val() * $('.summ8').data('summ');
        $('.summ8').html(summ8.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button9').on('click', function() {
        let summ9 = $('.value9').val() * $('.summ9').data('summ');
        $('.summ9').html(summ9.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button10').on('click', function() {
        let summ10 = $('.value10').val() * $('.summ10').data('summ');
        $('.summ10').html(summ10.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button11').on('click', function() {
        let summ11 = $('.value11').val() * $('.summ11').data('summ');
        $('.summ11').html(summ11.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button12').on('click', function() {
        let summ12 = $('.value12').val() * $('.summ12').data('summ');
        $('.summ12').html(summ12.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button13').on('click', function() {
        let summ13 = $('.value13').val() * $('.summ13').data('summ');
        $('.summ13').html(summ13.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button14').on('click', function() {
        let summ14 = $('.value14').val() * $('.summ14').data('summ');
        $('.summ14').html(summ14.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button15').on('click', function() {
        let summ15 = $('.value15').val() * $('.summ15').data('summ');
        $('.summ15').html(summ15.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button16').on('click', function() {
        let summ16 = $('.value16').val() * $('.summ16').data('summ');
        $('.summ16').html(summ16.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button17').on('click', function() {
        let summ17 = $('.value17').val() * $('.summ17').data('summ');
        $('.summ17').html(summ17.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button18').on('click', function() {
        let summ18 = $('.value18').val() * $('.summ18').data('summ');
        $('.summ18').html(summ18.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button19').on('click', function() {
        let summ19 = $('.value19').val() * $('.summ19').data('summ');
        $('.summ19').html(summ19.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button20').on('click', function() {
        let summ20 = $('.value20').val() * $('.summ20').data('summ');
        $('.summ20').html(summ20.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button21').on('click', function() {
        let summ21 = $('.value21').val() * $('.summ21').data('summ');
        $('.summ21').html(summ21.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button22').on('click', function() {
        let summ22 = $('.value22').val() * $('.summ22').data('summ');
        $('.summ22').html(summ22.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button23').on('click', function() {
        let summ23 = $('.value23').val() * $('.summ23').data('summ');
        $('.summ23').html(summ23.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button24').on('click', function() {
        let summ24 = $('.value24').val() * $('.summ24').data('summ');
        $('.summ24').html(summ24.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button25').on('click', function() {
        let summ25 = $('.value25').val() * $('.summ25').data('summ');
        $('.summ25').html(summ25.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button26').on('click', function() {
        let summ26 = $('.value26').val() * $('.summ26').data('summ');
        $('.summ26').html(summ26.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button27').on('click', function() {
        let summ27 = $('.value27').val() * $('.summ27').data('summ');
        $('.summ27').html(summ27.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button28').on('click', function() {
        let summ28 = $('.value28').val() * $('.summ28').data('summ');
        $('.summ28').html(summ28.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button29').on('click', function() {
        let summ29 = $('.value29').val() * $('.summ29').data('summ');
        $('.summ29').html(summ29.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button30').on('click', function() {
        let summ30 = $('.value30').val() * $('.summ30').data('summ');
        $('.summ30').html(summ30.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button31').on('click', function() {
        let summ31 = $('.value31').val() * $('.summ31').data('summ');
        $('.summ31').html(summ31.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button32').on('click', function() {
        let summ32 = $('.value32').val() * $('.summ32').data('summ');
        $('.summ32').html(summ32.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button33').on('click', function() {
        let summ33 = $('.value33').val() * $('.summ33').data('summ');
        $('.summ33').html(summ33.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button34').on('click', function() {
        let summ34 = $('.value34').val() * $('.summ34').data('summ');
        $('.summ34').html(summ34.toFixed(2) + ' ₽/кг');
    });
    $('.quantity-button35').on('click', function() {
        let summ35 = $('.value35').val() * $('.summ35').data('summ');
        $('.summ35').html(summ35.toFixed(2) + ' ₽/кг');
    });


    $('.basket_total').on('click', function() {
        let summ7 = $('.value7').val() * $('.summ7').data('summ');
        let summ8 = $('.value8').val() * $('.summ8').data('summ');

        let totalPrice = summ8 + summ7;
        $('.total_price-sum').html(totalPrice.toFixed(2) + '₽/кг');
    });



    // Плейсхолдер
    $('input').blur(function(event) {
        var inputVal = this.value;
        if (inputVal) {
            this.classList.add('value-exists');
        } else {
            this.classList.remove('value-exists');
        }
    });

    // Toggle Пароль
    $('.unmask').on('click', function() {

        if ($(this).prev('input').attr('type') == 'password') {
            changeType($(this).prev('input'), 'text');

        } else {
            changeType($(this).prev('input'), 'password');

        }

        // return false;
    });

    function changeType(x, type) {
        if (x.prop('type') == type)
            return x; //That was easy.
        try {
            return x.prop('type', type); //Stupid IE security will not allow this
        } catch (e) {
            // //Try re-creating the element (yep... this sucks)
            // //jQuery has no html() method for the element, so we have to put into a div first
            // var html = $("<div>").append(x.clone()).html();
            // var regex = /type=(\")?([^\"\s]+)(\")?/; //matches type=text or type="text"
            // //If no match, we add the type attribute to the end; otherwise, we replace
            // var tmp = $(html.match(regex) == null ?
            //     html.replace(">", ' type="' + type + '">') :
            //     html.replace(regex, 'type="' + type + '"'));
            // //Copy data from old element
            // tmp.data('type', x.data('type'));
            // var events = x.data('events');
            // var cb = function(events) {
            //     return function() {
            //         //Bind all prior events
            //         for (i in events) {
            //             var y = events[i];
            //             for (j in y)
            //                 tmp.bind(i, y[j].handler);
            //         }
            //     }
            // }(events);
            // x.replaceWith(tmp);
            // setTimeout(cb, 10); //Wait a bit to call function
            // return tmp;
        }
    }

    // Video Player

    $(document).on('click', '.js-videoPoster', function(e) {
        //отменяем стандартное действие button
        e.preventDefault();
        var poster = $(this);
        // ищем родителя ближайшего по классу
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });

    //вопроизводим видео, при этом скрывая постер
    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        // Берем ссылку видео из data
        var src = iframe.data('src');
        // скрываем постер
        wrapper.addClass('videoWrapperActive');
        // подставляем в src параметр из data
        iframe.attr('src', src);
    }

    //Автозаполнение
    var source = ["Apples", "Oranges", "Bananas"];
    $("#search_form").autocomplete({
        source: source
    });

    //Скролл
    $(window).scroll(function() {
        var scrollTop = 300;
        var scrollMax = 1300;
        var scrollTovarMax = 700;
        console.log()
        if ($(window).scrollTop() >= scrollTop) {
            $('.zakaz_right').addClass('scroll');
        }
        if ($(window).scrollTop() > scrollMax) {
            $('.zakaz_right').removeClass('scroll');
        }
        if ($(window).scrollTop() > scrollMax) {
            $('.zakaz_right').removeClass('scroll');
        }
        if ($(window).scrollTop() < scrollTop) {
            $('.zakaz_right').removeClass('scroll');
        }
        if ($(window).scrollTop() >= scrollTop) {
            $('.tovar_slider').addClass('sliderscroll');
            $('.tovar_section-left .container').addClass('srollactive');
        }
        if ($(window).scrollTop() > scrollTovarMax) {
            $('.tovar_slider').removeClass('sliderscroll');
            $('.tovar_section-left .container').removeClass('srollactive');
        }
        if ($(window).scrollTop() < scrollTop) {
            $('.tovar_slider').removeClass('sliderscroll');
            $('.tovar_section-left .container').removeClass('srollactive');
        }
    });

    $("#slider").slider();



});

//CHECKBOX
$('input[type=checkbox]').click(function() {
    if (this.checked) {
        $('#FullName').attr('disabled', 'disabled').val('Иванов Иван');
        $('#phone').attr('disabled', 'disabled').val('+7 950 654-98-98');
        $('#email').attr('disabled', 'disabled').val('info@rrrr.com');
        $('.data_adress').attr('disabled', 'disabled').val('г. Киров, ул. Ленина 2 - 123');
    }
});