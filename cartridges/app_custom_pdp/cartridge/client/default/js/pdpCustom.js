function switchVerticalCarouseImagesBorder(event) {
    var $firstCarouselImage = $('.li-carousel--image-0');

    $firstCarouselImage.addClass("border border-secondary");

    $carouselImages = $('.li-carousel--images');

    $carouselImages.removeClass('border border-secondary')

    $(`.${event.target.classList[3]}`).addClass('border border-secondary')
}

function collapseButtonDetails() {
    if (($("#collapseProductDetails")).hasClass('collapse show')) {
        $('.js-product-icon').removeClass('fa-minus')
        $('.js-product-icon').addClass('fa-plus')
    } else {
        $('.js-product-icon').removeClass('fa-plus')
        $('.js-product-icon').addClass('fa-minus')
    }
}

function collapseButtonDelivery() {
    if (($("#collapseDelivery")).hasClass('collapse show')) {
        $('.js-delivery-icon').removeClass('fa-minus')
        $('.js-delivery-icon').addClass('fa-plus')
    } else {
        $('.js-delivery-icon').removeClass('fa-plus')
        $('.js-delivery-icon').addClass('fa-minus')
    }
}


function showMoreButton(event) {
    if (event.target.innerHTML == 'View Details') {
        $('.description-text--container').removeClass("description-text--length")
        $('.show-more--btn').text("Hide Details")
    } else {
        $('.description-text--container').addClass("description-text--length")
        $('.show-more--btn').text("View Details")
    }
}

function recommendedItemsCarouselCreate(event) {
    var $e = $(event.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.recommendation-carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            if (event.direction == "left") {
                $('.recommendation-carousel-item').eq(i).appendTo('.recommendation-carousel-inner');
            }
            else {
                $('.recommendation-carousel-item').eq(0).appendTo('.recommendation-carousel-inner');
            }
        }
    }
}

function productQuantityAction(action) {

    var $minusValue;
    var $plusValue;

    let $selectedOption = $('.js-product-quantity--values option:selected');

    if (action === 'decrease') {
        $minusValue = $selectedOption.val();
        $(`.js-product-quantity--values option[value=${$selectedOption.val()}]`).removeAttr('selected', 'selected');
        $(`.js-product-quantity--values option[value=${($minusValue * 1) - 1}]`).attr('selected', true);
    }

    if (action === 'increase') {
        $plusValue = $selectedOption.val();
        $(`.js-product-quantity--values option[value=${$selectedOption.val()}]`).removeAttr('selected', 'selected');
        $(`.js-product-quantity--values option[value=${($plusValue * 1) + 1}]`).attr('selected', true);;
    }

}

$('document').ready(function () {

    $('.li-carousel--images').click(function (event) {
        switchVerticalCarouseImagesBorder(event);
    })

    $('.js-collapse-details-btn').click(function () {
        collapseButtonDetails();
    })

    $('.js-collapse-delivery-btn').click(function () {
        collapseButtonDelivery();
    })

    $('.show-more--btn').click(function (event) {
        showMoreButton(event);
    })

    $('#recommendation-carousel').on('slide.bs.carousel', function (event) {
        recommendedItemsCarouselCreate(event);
    })

    $('.js-quantity-button--minus').click(function () {
        productQuantityAction('decrease');
    })

    $('.js-quantity-button--plus').click(function () {
        productQuantityAction('increase');
    });
})