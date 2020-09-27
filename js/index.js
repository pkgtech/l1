function menu(){
    $(".line-nav").toggle();
}

function fun() {
    // $(".aa").css("display", "block");
    $(".aa").show("slow");
    $("form").css("margin-top", "30%");
}

$(document).ready(function(){
    $('body').scrollspy({ target: '#navbar' })

    $('#sm-navbar a').click(function(){ $(".line-nav").toggle(); })
    
});