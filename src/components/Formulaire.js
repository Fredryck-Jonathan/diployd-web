// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';


import "../styles/formulaire_styles.css"

function form() {
  return (
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mdovagea" method="post">
      <h3>Envoyez moi un message</h3>
    <fieldset id="fs-frm-inputs">
      <div className='inputbox'>  
        
          <input className='text_input' type="text" name="Nom" id="full-name" required="required"></input>
          <label for="full-name">Nom/Prénom</label>
      </div>  

      <div className='inputbox'> 
        
          <input className='text_input' type="" name="Adresse_Email" id="email-address" required="required"></input>
          <label for="email-address">Addresse Email</label>
      </div>        
          
      <div className='inputbox'> 
        
          <textarea className='text_input' rows="5" name="Message" id="message" required="required"></textarea>
          <label for="message">Message</label>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
          
      </div>


      </fieldset>
      
  <input id='submit_button' type="submit" value="Envoyer"></input>
</form>
  );
}
export default form;