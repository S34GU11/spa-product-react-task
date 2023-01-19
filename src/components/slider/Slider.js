import ProductsListItem from "../productsListItem/ProductsListItem";
import './slider.scss'

const Slider = () => {


    return (
       <div className="slider">
           <ProductsListItem></ProductsListItem>
           <ProductsListItem></ProductsListItem>
           <ProductsListItem></ProductsListItem>
       </div>
    )
}

export default Slider