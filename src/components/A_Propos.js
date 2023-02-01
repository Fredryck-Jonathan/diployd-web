/*Import des libraries utiliser*/
import React  from 'react';

/*Import des styles externes*/
import '../styles/A_Propos_styles.css';

/*Import des composants*/

/*Import des images*/






function A_Propos() {


    return (
        <div id='A_Propos'>

            <h2>Qui je suis et quel est mon travail, en tant que développeur Web</h2>

            <div id='info'>
                <div id='box_img'><img src={require("../assets/photo_jonathan.jpg")} alt='Representation de Jonathan'></img></div>
                <p>Bonjour à tous, je me présente je me nomme <strong>Jonathan Fredryck</strong>, je suis un jeune de <strong>21 ans</strong>, qui souhaite se lancer dans <strong>le freelance</strong>, j'ai suivi une formation de <strong>développeur Web</strong>, je maitrise donc un grand pannel d'outil qui me permet de <strong>créer des sites web de tres bonnes qualités</strong>, dans se pannel d'outil, je maitrise dans un premier temps des outils <strong>Front-End</strong> qui permet une belles <strong>mise en page</strong>, dans un deuxiéme temps, des outils back-end qui permet de faire un lien avec une base de données, dans un dernier temps je maitrise des outil seo qui me permet de mieux referencer et de mieux gerer accesibilité d'un site web. </p>
            </div>
            
            <div id='competence_div'>
                <div className='competence'>
                    <img></img>
                    <h3>Développeur Front-End</h3>
                    <p>En tant que développeur Web, je suis capable a partir d'un cahier des charges et d'une maquettes réaliser une intégration front-end</p>
                    <p><strong>Compétences: HTML, CSS, JavaScript et React.js</strong></p>
                </div>

                <div className='competence'>
                    <img></img>
                    <h3>Développeur Back-End</h3>
                    <p>Je suis capable de vous développer votre serveur Node.js et configurer une base de onnées MongoDB.</p>
                    <p><strong>Compétences: Node.js et MongoDB</strong></p>
                </div>

                <div className='competence'>
                    <img></img>
                    <h3>audit SEO</h3>
                    <p>Je suis capable de vous proposer un audit SEO afin d'améliorer votre site internet</p>
                    <p><strong>Compétence: Audit SEO</strong></p>
                </div>


            </div>
        </div>
    )
}

export default A_Propos