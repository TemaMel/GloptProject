const mainList = document.querySelector('.main__list'),
mainItem = document.querySelectorAll('.main__item'),
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    mainList.classList.toggle('main__list_active');
});


// const slider = document.querySelector('.slider')
// const sliderItems = Array.from(slider.children);
// console.log(slider.children);

// sliderItems.forEach(function (slide, index) {
//     console.log(slide);

    // Скрываем все слайды, кроме первого

    // if (index !== 0) {
    //     slide.classList.add('hidden')
    // }

    // Добавляем индексы
    // slide.dataset.index = index;

    // Клик по слайдам


    // slide.addEventListener('click', function() {
        // console.log('Next');

        // Скрываем текущий слайд
        // slide.classList.add('hidden');
        // console.log(+slide.dataset.index + 1);

        // Рассчитываем индекс след слайда
        // let nextSlideIndex;
        // if (index + 1 ===sliderItems.length) {
        //     nextSlideIndex = 0;
        // } else {
        //     nextSlideIndex = index + 1
        // }
        // console.log(nextSlideIndex);




        // const nextSlideIndex = +slide.dataset.index + 1;
        // console.log(nextSlideIndex);

        // Находим след слайд
        // const nextSlide = slider.querySelector('[data-index="${nextSlideIndex}"]');
        // console.log('nextSlide');   

        // // Отображаем след слайд
        // nextSlide.classList.remove('hidden');
//     })
// });


//MODAL///////

$(document).ready(function() {

    //////MODAL/////////

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay').fadeOut('slow')
    });

    /////////MASKPHONE//////

    // $('input[name=phone]').mask("+7 (999) 999-99-99")

    ////////VALIDATE////

    // function validateForms(form){
    //     $(form).validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: "required",
    //             email: {
    //                 required: true,
    //                 email: true
    //             }
    //         },
    //         messages: {
    //             name: {
    //                 required: "Пожалуйста, введите своё имя",
    //                 minlength: jquery.validator.format("Введите {0} символа!")
    //             },
    //             phone: "Пожалуйста, введите свой номер телефона",
    //             email: {
    //                 required: "Пожалуйста введите свою почту",
    //                 email: "Неправильно введен адрес почты"
    //             }
    //         }
            
    //     });
    // };

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation form');
    validateForms('##price_form');


    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

});



////////////СЛАЙДЕР///////
new Swiper('.slider', {
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -60,
        depth: 100,
        modifier: 3,
        slideShadows : false,
    },
    breakpoints: {
        // when window width is >= 320px
        992: {
            slidesPerView: 3,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
    }
    
}); 
