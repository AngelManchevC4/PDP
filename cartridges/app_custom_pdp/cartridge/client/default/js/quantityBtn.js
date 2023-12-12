$("document").ready(function () {

    var $minusValue;
    var $plusValue;

    $('.js-quantity-button--minus').click(function (e) {
        let $selectedOption = $('.js-product-quantity--values option:selected');
        $minusValue = $selectedOption.val();
        $(`.js-product-quantity--values option[value=${$selectedOption.val()}]`).removeAttr('selected', 'selected');
        $(`.js-product-quantity--values option[value=${($minusValue * 1) - 1}]`).attr('selected', true);
    });

    $('.js-quantity-button--plus').click(function (e) {
        let $selectedOption = $('.js-product-quantity--values option:selected');
        $plusValue = $selectedOption.val();
        $(`.js-product-quantity--values option[value=${$selectedOption.val()}]`).removeAttr('selected', 'selected');
        $(`.js-product-quantity--values option[value=${($plusValue * 1) + 1}]`).attr('selected', true);;

    });
});