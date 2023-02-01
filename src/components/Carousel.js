
import React, { useState} from "react"

import '../styles/Carousel_styles.css'

let props = [
  {
    "pictures": [
      "../assets/img-01.jpg",
      "../assets/img-02.jpg",
      "../assets/img-03.jpg",
      "../assets/img-04.jpg",
    ]
  }
  ]




const Carousel = () => {

  let props = [
        "../img-01.jpg",
        "../img-02.jpg",
        "../img-03.jpg",
        "../img-04.jpg",
      ]
    
  
  
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
              return <a href={item} target="_blank" rel="noopener noreferrer" style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index} alt='representation habitat'  className="carousel-item"><img 
                  src={item}></img></a>
            })

                
            }
            




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