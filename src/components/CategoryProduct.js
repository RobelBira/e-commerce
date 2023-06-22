import { useContext } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import styled from 'styled-components'

import { CartContext } from '../context/CartContext';

const ProductTitle=styled.div`
  grid-column: 1 / span 3;
 color:blue;
 font-weight: bold;
 font-size: 1.5em;
 padding-left: 10px;
`;
const ProductImageContainer=styled.div`
padding: 10px;
  width: 60%;
`;
const ProductInfo=styled.div`
display: flex;
flex-direction: column;
`

const CategoryProduct = ({id,title,image,specs,features,price,stock}) => {

const navigate=useNavigate()

const {addProduct}= useContext(CartContext)


  return (
   <article>
    {/* <div className='block'> */}
    <ProductTitle >
       
       <Link to={`products/${id}`}>
        {title}
       </Link>
    </ProductTitle>

    <figure>
        <ProductImageContainer >

            <Link to={`products/${id}`}>

            <img 
 src={`/assets/${image}`} alt={title} />
            </Link>

        </ProductImageContainer>
    </figure>
 {/* </div> */}
 
    <aside>
        <ProductInfo >
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>

        </ProductInfo>

       {specs.capacity && 
        <ProductInfo>
            <h3>capacity</h3>
            <label>{specs.capacity}</label>
            <label>free delivery</label>
        </ProductInfo>
}

<div className="category-product-info-features">
    <h3>features</h3>
    <ul>
        {features?.map((f,i)=>{
       return <li key={`feature${i}`}>{f}</li>
        })}
    </ul>

</div>

    </aside>

    <aside className="category-product-finance">
<div className="category-product-finance-price" style={{color:'red',fontSize:'20px'}}>
 &pound;{price}   
</div>

<div className="category-product-info-stock">
    <label> {stock}</label>
    <label>Free delivery</label>
</div>


<div className="category-product-action"
>
    <button  onClick={()=>navigate(`products/${id}`)}>View product</button>
    <button onClick={() => addProduct({id, title, price})}>Add to Basket</button>
</div>
    </aside>
    
   </article>
  )
}
export default CategoryProduct






// import React, { useContext } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';

// import { CartContext } from "../context/CartContext";



// const CategoryProduct = ({
//     id,
//     title,
//     image,
//     specs,
//     features,
//     price,
//     stock,
// }) => {
//     const navigate = useNavigate();
//     const { addProduct } = useContext(CartContext);

//     return (
//         <ProductInfoArticle>
//             <ProductTitle>
//                 <Link to={`/products/${id}`}>{title}</Link>
//             </ProductTitle>

//             <figure>
//                 <ProductImageContainer>
//                     <ProductImage src={`/assets/${image}`} alt={title} />
//                 </ProductImageContainer>
//             </figure>

//             <aside>
//                 <ProductInfo>
//                     <ProductInfoHeader>Dimensions</ProductInfoHeader>
//                     <label>{specs.dimensions}</label>
//                 </ProductInfo>

//                 {specs.capacity && (
//                     <ProductInfo>
//                         <ProductInfoHeader>Capacity</ProductInfoHeader>
//                         <label>{specs.capacity}</label>
//                     </ProductInfo>
//                 )}

//                 <ProductInfo>
//                     <ProductInfoHeader>Features</ProductInfoHeader>
//                     <ul>
//                         {features?.map((f, i) => {
//                             return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>;
//                         })}
//                     </ul>
//                 </ProductInfo>
//             </aside>

//             <aside>
//                 <ProductInfoFinancePrice>
//                     &pound;{price}
//                 </ProductInfoFinancePrice>

//                 <ProductInfoStock>
//                     <ProductInfoStockLabel>Stock Level: {stock}</ProductInfoStockLabel>
//                     <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
//                 </ProductInfoStock>

//                 <ProductInfoAction>
//                     <ProductInfoActionButton onClick={() => navigate(`/products/${id}`)}>
//                         View Product
//                     </ProductInfoActionButton>
//                     <ProductInfoActionButton onClick={() => addProduct({id, title, price})}>Add to Basket</ProductInfoActionButton>
//                 </ProductInfoAction>
//             </aside>
//         </ProductInfoArticle>
//     );
// };

// export default CategoryProduct;

// const ProductInfoArticle = styled.article`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 0.25fr 1fr 0.25fr;
//     column-gap: 20px;
// `;

// const ProductTitle = styled.div`
//         grid-column: 1 / span 3;
//         color: darkslategray;
//         font-weight: bold;
//         font-size: 1.5em;
//         padding-left: 10px;
//     `;

// const ProductImageContainer = styled.div`
//     padding: 10px;
//     width: 60%;
// `;

// const ProductImage = styled.img`
//     width: 100%;
//     height: 100%;
// `;

// const ProductInfo = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const ProductInfoHeader = styled.h3`
//     color: darkslategray;
//     font-size: 1em;
//     font-weight: bold;
//     padding-top: 10px;
//     padding-bottom: 5px;
// `;

// const ProductInfoListItem = styled.li`
//     padding-top: 5px;
// `;

// const ProductInfoStock = styled.div`
//     padding-left: 10px;
//     margin-top: 20px;
//     padding-top: 10px;
//     background-color: lightgrey;
//     height: 20%;
//     width: 30%;
//     border-radius: 5px;
//     font-weight: bold;
//     display: flex;
//     flex-direction: column;
// `;

// const ProductInfoStockLabel = styled.label`
//     padding-bottom: 5px;
// `;

// const ProductInfoAction = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const ProductInfoActionButton = styled.button`
//     width: 160px;
//     height: 30px;
//     border-radius: 10px;
//     margin-top: 20px;
//     background-color: lightgray;
//     border: solid 1px slategrey;
//     font-weight: bold;
// `;

// const ProductInfoFinancePrice = styled.div`
//     color: darkslategray;
//     font-size: 2em;
//     font-weight: bold;
//     padding-top: 10px;
// `;