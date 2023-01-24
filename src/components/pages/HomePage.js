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
                  <>
                      <h1>Home Page</h1>
                      <Slider products={sliderItems}></Slider>
                  </>
           }
       </>
    )
}

export default HomePage