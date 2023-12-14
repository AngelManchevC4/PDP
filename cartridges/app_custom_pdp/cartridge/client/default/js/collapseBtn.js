$('document').ready(function () {

    var counterDetails = 1;
    var counterDelivery = 1;

    $('.js-collapse-details-btn').click(function () {

            if(counterDetails % 2 !== 0 ){
                $('.js-product-icon').removeClass('fa-plus')
                $('.js-product-icon').addClass('fa-minus')
            }else{
                $('.js-product-icon').removeClass('fa-minus')
                $('.js-product-icon').addClass('fa-plus')
            }
            counterDetails++;
            console.log(counterDetails);

    })

    $('.js-collapse-delivery-btn').click(function () {
 
        if(counterDelivery % 2 !== 0 ){
            $('.js-delivery-icon').removeClass('fa-plus')
            $('.js-delivery-icon').addClass('fa-minus')
        }else{
            $('.js-delivery-icon').removeClass('fa-minus')
            $('.js-delivery-icon').addClass('fa-plus')
        }
        counterDelivery++;
        console.log(counterDelivery);

})

})