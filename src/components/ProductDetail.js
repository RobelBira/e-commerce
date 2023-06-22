import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import {getProductById} from '../fetcher'
import styled from "styled-components"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const ProductDetail = () => {
   
  const [product,setProduct]=useState({errorMessage:'', data:{}})
  const {productId}=useParams()

  const {addProduct}=useContext(CartContext)

useEffect(()=>{
   const fetchData= async ()=>{
    const responseObject =await getProductById(productId)
    setProduct(responseObject)
   }
   fetchData();
},[productId])


  return (
  
       <article>
    {/* <div className='block'> */}
    <div className="category-product-title">
        {product.data.title}
      
    </div>
        

    <figure>
        <div className="category-product-image-container">
            <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </div>
    </figure>
            

 {/* </div> */}
    <aside>
        <div className="category-product-info-dimensions">
            <h3>Dimensions</h3>
            <label>{product.data.specs?.dimensions}</label>

        </div>

       {product.data.specs?.capacity && 
        <div className="category-product-info-capacity">
            <h3>capacity</h3>
            <label>{product.data.specs?.capacity}
           
            </label>
            <label>free delivery</label>
        </div>
}

<div className="category-product-info-features">
    <h3>features</h3>
    <ul>
        {product.data.features?.map((f,i)=>{
       return <li key={`feature${i}`}>{f}</li>
        })}
    </ul>

</div>

    </aside>

    <aside className="category-product-finance">
<div className="category-product-finance-price" style={{color:'red',fontSize:'20px'}}>
 &pound;{product.data.price}   
</div>

<div className="category-product-info-stock">
    <label> {product.data.stock}</label>
    <label>Free delivery</label>
</div>


<div className="category-product-action"
>
  
    <button  onClick={() =>
    addProduct({
    id: product.data.id,
    title: product.data.title,
    price: product.data.price,
      })}>
        Add to Basket
    </button>
        
</div>
    </aside>
    

    <ProductDescription>
      {product.data?.description}
    </ProductDescription>
   </article>
  )
}
export default ProductDetail


const ProductDescription=styled.div`
grid-column: 1 / span 3;
`;