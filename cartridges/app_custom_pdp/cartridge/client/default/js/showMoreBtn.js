$('document').ready(function(){
    $('.show-more--btn').click(function(e){
        if(e.target.innerHTML == 'View Details'){
            $('.description-text--container').removeClass("description-text--length")
            $('.show-more--btn').text("Hide Details")
        }else{
            $('.description-text--container').addClass("description-text--length")
            $('.show-more--btn').text("View Details")
        }
    })
})