import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductsListItem from "../productsListItem/ProductsListItem";
import './slider.scss'

const Slider = props => {

    const { products } = props

    const sliderItems =
       products.map((item, i) => {
           return (
              <ProductsListItem
                 key={i}
                 itemTitle={item.title.slice(0, 20)}
                 itemImg={item.image}
                 itemDesc={item.description.slice(0, 50)}/>
           )
       })

    return (
       <>
           {
               <AliceCarousel
                   mouseTracking
                   items={sliderItems}
                   disableDotsControls
                   keyboardNavigation
                   // autoWidth={true}
                   responsive={
                      {
                          0: {
                              items: 2,
                          },
                          1460: {
                              items: 3,
                              itemsFit: "contain"
                          }
                      }
                  }/>
           }
       </>
    )
}

export default Slider