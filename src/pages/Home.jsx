/*Style(s)*/
import '../styles/Home_styles.css'

/*Composant*/ 
import Portfolio from '../components/Portfolio.js';
import A_Propos from '../components/A_Propos';
import Contact from '../components/Contact';
import Accueil from '../components/Accueil';

/*ajout de react*/
import React from "react";

/*ajout du tableau de la base de données */



function Home() {
    return (

        <div id='page' >

 
            <Accueil></Accueil>
            <A_Propos></A_Propos>
            <Portfolio></Portfolio>
            <Contact></Contact>
                
            




        </div>
    )
}

console.log('Home')

export default Home