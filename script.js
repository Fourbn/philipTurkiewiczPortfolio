const site = {}

site.headerAnimation = () => {
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

site.init = () => {
   site.headerAnimation();
}


$(function(){
   site.init()
})