import Slider from "../slider/Slider";
import {useEffect, useState} from "react";
import Spinner from "../spiner/Spinner";


const HomePage = () => {
    const [sliderItems, setSliderItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products?limit=8')
           .then(res=>res.json())
           .then(json=> {
               setSliderItems(json)
               setLoading(false)
           })
    }, [])

    return (
       <>
           {
               loading ? <Spinner/> :
                  <div className="home-slider-block">
                      <h1 className="home-slider-block__title">Home Page</h1>
                      <div className="home-slider-block__slider">
                          <Slider products={sliderItems}></Slider>
                      </div>
                  </div>
           }
       </>
    )
}

export default HomePage