const site = {}

site.showForm = () => {
   $('#showForm').on('click', function(e) {
      e.preventDefault();

      $('.contactPopup').removeClass('toggleHidden')
      $('.contactPopup').addClass('showPopup')
   })
}

site.closeForm = () => {
   $('.exit').on('click', function() {
      $('.contactPopup').removeClass('showPopup');
      
      setTimeout(function() {
         $('.contactPopup').addClass('toggleHidden')
      }, 750);
   })
}

site.changeTabs = () => {
   $('#contactTab').addClass('currentTab');

   $('#contact').on('click', '#contactTab', function() {
      $('#contactTab').toggleClass('currentTab');
      $('#calendlyTab').toggleClass('currentTab');

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
   })

   $('#contact').on('click', '#calendlyTab', function() {
      $('#contactTab').toggleClass('currentTab');
      $('#calendlyTab').toggleClass('currentTab');

      $('.displayed').html(`
            <div class="calendlyDisplay">
               <a href="https://calendly.com/philip-turkiewicz/30min" target="_blank" rel="noopener" class="largeButton">
                  <p>Calendly</p>
                  <p>Book Appointment!</p>
               </a>
               <a href="mailto:philip.turkiewicz@live.ca" class="largeButton">
                  <p>phil . turkiewicz</p>
                  <p>Send an Email</p>
               </a>
            </div>
         `)
   })
}

site.headerAnimation = () => {
   $('.headerText p:first-child').addClass('transition');
   setTimeout(function() {
      $('h1').addClass('transitionBlue');
   }, 1300)
   setTimeout(function() {
      $('.developer').addClass('transition');
      setTimeout(function() {
         $('.debutante').addClass('transition')
         setTimeout(function(){
            $('.doofus').addClass('transition')
         }, 1000)
      }, 1000)
   }, 2800);
}

site.init = () => {
   site.headerAnimation();
   site.showForm();
   site.closeForm();
   $('#contactTab').prop('checked', true);
   site.changeTabs();
}


$(function(){
   site.init()
})