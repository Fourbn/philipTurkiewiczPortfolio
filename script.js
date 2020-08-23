wordFadeIn = () => {
   console.log('hello?')
   $('.developer').addClass('transition');
   $('.debutante').addClass('transition');
   $('.doofus').addClass('transition');
}

headerAnimation = () => {
   $('.headerText p:first-child').fadeTo(3000, 1);
   $('h1').delay(2200).fadeTo(3000, 1);
   setTimeout(function() {
      $('.developer').addClass('transition');
      setTimeout(function() {
         $('.debutante').addClass('transition')
         setTimeout(function(){
            $('.doofus').addClass('transition')
         }, 1200)
      }, 1200)
   }, 4800);
}


$(function(){
   console.log('doc ready')
   headerAnimation();
})