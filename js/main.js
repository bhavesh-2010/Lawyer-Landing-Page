/*sticky header*/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 100) {
      $("header.navbar").addClass("sticky-header");
    } 
    else {
      $("header.navbar").removeClass("sticky-header");
    }
}); 


$( document ).ready(function() {
  $('#overlay').fadeIn().delay(2000).fadeOut();
});

