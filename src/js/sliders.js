$('.cards-slider__inner').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.banner-slider__inner').slick({
    arrows: false,
    dots: true,
});

$('.slider-cards__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '90px',
    responsive: [
        {
            breakpoint: 1260,
            settings: {
                centerMode: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                centerPadding: '100px'
            }
        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                centerMode: false
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 710,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                centerPadding: '70px'
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
    ]
});

$('.product-card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__nav-slider',
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                dots: true
            }
        },
    ]
});
$('.product-card__nav-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__slider',
    focusOnSelect: true
});

$('.accessories__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="accessories__slider-btn accessories__slider-btn--prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="accessories__slider-btn accessories__slider-btn--next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 1160,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});