$('document').ready(function () {
    var $firstCarouselImage = $('.li-carousel--image-0');

    $firstCarouselImage.addClass("border border-secondary");

    $carouselImages = $('.li-carousel--images');

    $carouselImages.map(image => {
        $carouselImages.click(function (e) {
            $carouselImages.removeClass('border border-secondary')
            $(`.${e.target.classList[3]}`).addClass('border border-secondary')
        })
    })
})