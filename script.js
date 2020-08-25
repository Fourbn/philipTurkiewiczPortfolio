const site = {}

site.showForm = () => {
   $('#showForm').on('click', function(e) {
      e.preventDefault();

      $('.contactPopup').removeClass('toggleHidden')
      $('.contactPopup').addClass('showPopup')
   })
}

site.closeForm = () => {
   $('.fa-times').on('click', function() {
      $('.contactPopup').removeClass('showPopup');
      
      setTimeout(function() {
         $('.contactPopup').addClass('toggleHidden')
      }, 750);
   })
}

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
   site.showForm();
   site.closeForm();
}


$(function(){
   site.init()
})