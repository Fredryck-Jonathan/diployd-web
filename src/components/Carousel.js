
import React, { useState} from "react"

import '../styles/Carousel_styles.css'

import { data_carousel } from "../data/data_carousel"



const Carousel = () => {

  let props = data_carousel
    
  
  
    const data = props
    console.log(data)
    const [currentIndex, setCurrentIndex] = useState(0)


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = data.length - 1;
        } else if (newIndex >= data.length) {
            newIndex = 0;
        }

        setCurrentIndex(newIndex)
  
    }






    
    
    
    return (
        <div className="carousel-container">
            {data.map((item, index) => {

                if (item.mobile == false) {
                    return (
                        <a href={item.lien} target="_blank" rel="noopener noreferrer" style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index} alt={item.description} className="carousel-item">
                            <img class='desktop_img'src={item.img}></img>
                            <p className="description_carousel">{item.description}</p>
                        </a>
                    )
                } else {
                    return (
                        <a href={item.lien} target="_blank" rel="noopener noreferrer" style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index} alt={item.description} className="carousel-item">
                            <img class='mobile_img'src={item.img}></img>
                            <p className="description_carousel">{item.description}</p>
                        </a>
                    )  


                }
            })}
            




            {data.length > 1 &&
                <>
                    <div className="indicators">

                        <span onClick={() => {
                            updateIndex(currentIndex - 1);
                        }} className="material-icons_carousel">
                            chevron_left
                        </span>

                        <span onClick={() => {
                            updateIndex(currentIndex + 1);
                        }} className="material-icons_carousel">
                            chevron_right
                        </span>
                    </div>
                
                    <div className="number_carousel">
                        <span>{currentIndex + 1}/ {data.length}</span>

                    </div>
                </>
            }
        </div>
    )
}

export default Carousel