let appendNumber = 600;
    let prependNumber = 1;
    const swiper1 = new Swiper('.owl', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      virtual: {
        slides: (function () {
          const slides = [];
          for (var i = 0; i < 600; i += 1) {
            slides.push('Slide ' + (i + 1));
          }
          return slides;
        })(),
      },
    });

    // document
    //   .querySelector('.slide-1')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper1.slideTo(0, 0);
    //   });

    document
      .querySelector('.slide-250')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.slideTo(249, 0);
      });

    document
      .querySelector('.slide-500')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.slideTo(499, 0);
      });

    document
      .querySelector('.prepend-2-slides')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.virtual.prependSlide([
          'Slide ' + --prependNumber,
          'Slide ' + --prependNumber,
        ]);
      });

    document
      .querySelector('.append-slide')
      .addEventListener('click', function (e) {
        e.preventDefault();
        swiper1.virtual.appendSlide('Slide ' + ++appendNumber);
      });