import './productsListItem.scss'

const ProductsListItem = (props) => {


    const { itemImg, itemTitle, itemDesc } = props

    return (
       <>
           <div className="item">
               <img src={itemImg}
                    alt="product"
                    className="item__img"/>
               <div className="item__description description">
                   <h4 className="description__title">{itemTitle}</h4>
                   <p className="description__text">{itemDesc}...</p>
               </div>
           </div>
       </>
    )
}

export default ProductsListItem