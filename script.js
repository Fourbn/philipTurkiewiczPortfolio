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

site.changeTabs = () => {
   $('#contact').on('click', '.tab', function() {
      console.log('click', $(this), $(this).prev("input[type='radio']").val())
      if ($(this).prev("input[type='radio']").val() === 'contactTab') {
         $('.displayed').html(`
            <form action="https://formspree.io/xwkrjjnn" method="POST">
   
                  <label for="name" class="srOnly">Name:</label>
                  <input type="text" name="name" class="name" id="name" placeholder="Name" required>
   
                  <label for="email" class="srOnly">Email:</label>
                  <input type="email" name="email" class="email" id="email" placeholder="Email" required>
   
                  <label for="subject" class="srOnly">Subject:</label>
                  <input type="text" name="subject" class="subject" id="subject" placeholder="Subject" required>
   
                  <label for="message" class="srOnly">Your message:</label>
                  <textarea name="message" class="message" id="message" placeholder="What can I do for you?" required></textarea>
   
                  <button type="submit" class="button">Finished</button>
               </form>
         `)
      } else {
         $('.displayed').html('Calendly Tab')
      }
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
   site.changeTabs();
}


$(function(){
   site.init()
})