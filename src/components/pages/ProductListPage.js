import {
    useEffect,
    useState,

} from "react";
import ProductsListItem from "../productsListItem/ProductsListItem";
import Spinner from "../spiner/Spinner";


const ProductListPage = () => {
    const [productItems, setProductItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products?limit=8')
           .then(res=>res.json())
           .then(json=> {
               setProductItems(json)
               setLoading(false)
           })

    }, [])

    return (
       <>
           {
               loading ? <Spinner/> :
              <>
                  <h1>Product Page</h1>
                  <div className="products-list-block">
                      {
                          productItems.map((item, i) => {
                              return (
                                 <ProductsListItem
                                    key={i}
                                    itemTitle={item.title.slice(0, 20)}
                                    itemImg={item.image}
                                    itemDesc={item.description.slice(0, 60)}/>
                              )
                          })
                      }
                  </div>
              </>
           }
       </>
    )
}

export default ProductListPage
