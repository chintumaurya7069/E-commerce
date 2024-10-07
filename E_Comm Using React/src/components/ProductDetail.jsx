import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const ProductDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)
        setProduct(filterProduct[0])

        const filterRelatedProduct = items.filter((p)=> p.category == product.category)
        setRelatedProduct(filterRelatedProduct)
    }, [id,product.category])


    return (
        <>
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} />
                </div>
                <div className="text-center">
                    <div><h2>{product.title}</h2></div>
                    <div>{product.description}</div>
                    <button className='btn btn-primary mx-3'>{product.price}</button>
                    <button className='btn btn-warning'>Add to Cart</button>
                </div>

            </div>
            <h1 className='text-center'>Related Products</h1>
            <Product items={relatedProduct}/>
        </>
    )
}

export default ProductDetail