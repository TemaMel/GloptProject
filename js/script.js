const mainList = document.querySelector('.main__list'),
mainItem = document.querySelectorAll('.main__item'),
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    mainList.classList.toggle('main__list_active');
});


const slider = document.querySelector('.slider')
const sliderItems = Array.from(slider.children);
console.log(slider.children);

sliderItems.forEach(function (slide, index) {
    console.log(slide);

    // Скрываем все слайды, кроме первого

    if (index !== 0) {
        slide.classList.add('hidden')
    }

    // Добавляем индексы
    slide.dataset.index = index;

    // Клик по слайдам


    slide.addEventListener('click', function() {
        console.log('Next');

        // Скрываем текущий слайд
        // slide.classList.add('hidden');
        console.log(+slide.dataset.index + 1);

        // Рассчитываем индекс след слайда
        let nextSlideIndex;
        if (index + 1 ===sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1
        }
        console.log(nextSlideIndex);




        // const nextSlideIndex = +slide.dataset.index + 1;
        // console.log(nextSlideIndex);

        // Находим след слайд
        const nextSlide = slider.querySelector('[data-index="${nextSlideIndex}"]');
        console.log('nextSlide');   

        // Отображаем след слайд
        nextSlide.classList.remove('hidden');
    })
});
