var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

function display_actionn(){
    var slider = document.querySelectorAll(".mySwiper2 .up-sld");

    slider.forEach((el, index) => {
        console.log(el)
        console.log(index);
        el.classList.remove("sld-nxt");
        
        if(el.classList.contains("swiper-slide-next")){ 
            el.classList.add("sld-nxt");
            //add 'ggez' to the next next slide
            if(index+1 < slider.length){
                slider[index+2].classList.add("sld-nxt-nxt");
                slider[index+1].classList.remove("sld-nxt-nxt");
            }
        }
    });
}
// display_actionn()
