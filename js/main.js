// scrollspy

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

$( document ).ready(function() {
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.slider').slider({full_width: false, height: 300});
});

// nav-main

var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
  header = document.getElementById("rowNav");
  didScroll = false,
  changeHeaderOn = 300;
  changeTwoOn = 1100;
  var barra = document.getElementById("nav");
  var buttonUp = document.getElementById("btn-up-hide");

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 400 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();

    if ( sy >= changeHeaderOn) {
      header.setAttribute("class", "navbar-fixed");
      barra.setAttribute("class", "white z-depth-1 nav-main");
      buttonUp.setAttribute("class", "");
    }
    else {
      header.setAttribute("class", "container");
      barra.setAttribute("class", "white z-depth-0 nav-main");
      buttonUp.setAttribute("class", "hide");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();

function myMoveTwo(){
  $(".listStagLeft").velocity("transition.slideLeftIn", { stagger: 250 })
  $(".listStagRight").velocity("transition.slideRightIn", { stagger: 250 })
  //$(".listStag").css('display', 'block');
  //Materialize.showStaggeredList("#staggered-test");
  //Materialize.showStaggeredList("#staggered-testTwo");
}

function myMoveTree(){
  $('#staggered-widget').show();
  Materialize.showStaggeredList("#staggered-widget");
}

function myMoveFour(){
  $('#slider-widget').show();
  Materialize.fadeInImage('#slider-widget');
}

var options = [
  {selector:"#boton-sticker", offset: 600, callback: "myMove()"},
  {selector:"#staggered-test", offset: 200, callback:"myMoveTwo()"},
  {selector: '#section-widget', offset: 200, callback:"myMoveTree()"},
  {selector: '#section-widget', offset: 400, callback:"myMoveFour()"}
];
Materialize.scrollFire(options);
