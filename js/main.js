$(function () {
    $('.header-slider').slick({
        arrows: false,              /* отключили стрелки у слайдера, смотреть настройки на сайте slick */
        vertical: true,             /* скроллинг слайдов повертикали */ 
        dots: true,                 /* включили точки на слайдере */
        dotsClass: 'header__dots',  /* стандартному классу присвоили новый наш класс */ 
        autoplay: true,             /* автопрокрутка слайдов */
        autoplaySpeed: 2000,        /* скорость прокрутки: 2000 = 2сек*/ 
    });

    $('.menu__btn').on('click', function(){      /* настройка клика по гамбургеру  */
        $('.menu__list').slideToggle();          /* реанимирует элемент , которому было задано display: none*/

    });

});