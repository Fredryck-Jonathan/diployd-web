/*Import des libraries utiliser*/
import React  from 'react';


/*Import des styles externes*/
import '../styles/Header_styles.css';



function animationheader(event){

    let liDepart = event

    console.log(liDepart, liDepart.nextSibling.classList)
    let nextsibling = liDepart.nextSibling;
    let previoussibling = liDepart.previousSibling;

    while(nextsibling) {

        console.log(nextsibling)
        nextsibling.classList.remove("active");
        nextsibling = nextsibling.nextSibling;

        
    }

    while (previoussibling) {
            
        console.log(previoussibling)
            previoussibling.classList.remove("active");

            previoussibling = previoussibling.previousSibling;
        }

    liDepart.classList.add("active");;
    
    

}

window.addEventListener('scroll', function (e){
    
    if (window.scrollY < 908) {
    

        document.getElementById('header_nav').classList.remove("active")
    }

    if (window.scrollY > 908) {
    

        document.getElementById('header_nav').classList.add("active")
    }


    if (window.scrollY > 908 && window.scrollY < 1600) {
    
        console.log('changementoklm', document.getElementById('header_nav').style)
        let liPropos = document.getElementById('propos_nav')
        animationheader(liPropos)



    }

    if (window.scrollY > 1900 && window.scrollY < 2800) {
    
        console.log('changementoklm')
        let liPropos = document.getElementById('portfolio_nav')
        animationheader(liPropos)
    }

    if (window.scrollY > 2800) {
    
        console.log('changementoklm')
        let liPropos = document.getElementById('contact_nav')
        animationheader(liPropos)
    }
})




function Header() {



    return (
        <div id='header_nav'>




            <nav>
                <ul id='ul_header'>
                    <li  id='propos_nav'><a href="#A_Propos">A Propos</a></li>
                    <li  id='portfolio_nav'><a href="#portfolio"> Portfolio</a></li> 
                    <li  id='contact_nav'><a href="#contact"> Contact</a></li> 
                    <li className='slide'></li>
                </ul>

            </nav>
            
        </div>
    )
}

export default Header