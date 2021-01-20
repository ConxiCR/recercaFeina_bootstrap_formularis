//per fer ensenyar el menu desplegable al fer click

document.querySelector('.navbar-toggler').addEventListener('click',() => {
document.querySelector('.navbar-nav').classList.toggle('show');
/*document.querySelector('.dropdown-menu').classList.toggle('show');*/
  });
//funció slider        
$(document).ready(function(){
  // Activate Carousel
  $("#demo").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#demo").carousel(0);
  });
  $(".item2").click(function(){
    $("#demo").carousel(1);
  });
  $(".item3").click(function(){
    $("#demo").carousel(2);
  });
  $(".item4").click(function(){
    $("#demo").carousel(3);
  });
  
});
