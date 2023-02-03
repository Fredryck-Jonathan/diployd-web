/*Import des libraries utiliser*/
import React  from 'react';

/*Import des styles externes*/
import '../styles/Contact_styles.css';

/*Import des composants*/
import Formulaire from './Formulaire'


function Contact() {


    return (
        <div id='contact'>

            <div id='contact_intro'>
                <h3>Contactez-moi !</h3>
                <p id='message_intro_contact'>Pour toutes information concernant mon travail, pour passez une commande.</p> 
            </div>

            
            <div id='contact_containers'>
                <div id='contact_infos'>
                    
                    <a class="contact_infos_containers" href="mailto:fredryckjonathan@gmail.com" >
                        
                        <div class='contact_infos_icon'>
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div class='contact_infos_infos'>
                            <h4>Mail</h4>
                            <p>fredryckjonathan@gmail.com</p>
                        
                        </div>    
                    </a>

                    <div class="contact_infos_containers">
                        
                        <div class='contact_infos_icon'>
                            <ion-icon name="call-outline"></ion-icon>
                        </div>

                        <div class='contact_infos_infos'>
                            <h4>Téléphone</h4>
                            <p>07 68 02 82 25</p>
                        
                        </div>                        
                    </div>

                    

                    <div id="contact_infos_social">
                        
                        <div id="contact_infos_social_text">
                            <div></div>
                            <h4>Mes réseaux</h4>

                        </div>
                        
                        <div id="contact_infos_social_icon">
                           <a href='/'><ion-icon name="logo-facebook"></ion-icon></a>
                           <a href='https://www.linkedin.com/in/jonathan-fredryck/' target="_blank" rel="noopener noreferrer" ><ion-icon name="logo-linkedin"></ion-icon></a>
                        </div>
                    </div>

                </div>
    
                <div id='contact_form'>

                    <Formulaire></Formulaire>

                </div>
            </div>
            
        </div>
    )
}

export default Contact