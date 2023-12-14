/*
    Carousel
*/
$('document').ready(function () {
    $('#recommendation-carousel').on('slide.bs.carousel', function (e) {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.recommendation-carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('.recommendation-carousel-item').eq(i).appendTo('.recommendation-carousel-inner');
                }
                else {
                    $('.recommendation-carousel-item').eq(0).appendTo('.recommendation-carousel-inner');
                }
            }
        }
    });
})

