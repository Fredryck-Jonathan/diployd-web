/*Import des libraries utiliser*/
import React  from 'react';

/*Import des styles externes*/
import '../styles/Accueil_styles.css';

/*Import des composants*/
import Carousel from './Carousel';
import Animation from './Animation';



function accueil() {


    return (
        <div id='accueil'>

        <img id='logo_accueil' src='logo_footer.png'></img>
        <p>Bienvenue sur mon site internet</p>
        <a href="#A_Propos">Clique pour en savoir plus</a> 

        <Animation></Animation>    

            
        </div>
    )
}

export default accueil