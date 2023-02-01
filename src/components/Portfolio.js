/*Import des libraries utiliser*/
import React  from 'react';

/*Import des styles externes*/
import '../styles/Portfolio_styles.css';

/*Import des composants*/
import Carousel from './Carousel';


function Portfolio() {


    return (
        <div id='portfolio'>

            <h2>Voici mon portfolio !</h2>

            <Carousel></Carousel>

            
        </div>
    )
}

export default Portfolio