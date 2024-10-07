import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({items, cart, setCart}) => {
    
    const addToCart = (id,title,imgSrc,price,description) =>{
        const obj = {
            id,title,imgSrc,price,description
        }
        setCart([...cart, obj]);
        toast.success('Your Item Is Added In Cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
    }

    return (
        <>
        <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
            <div className="container">
                <div className="row">
                    {
                        items.map((product) => {
                            return (
                                <>
                                    <div key={product.id} className="col-lg-4 col-md-6 my-3">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <Link to={`/product/${product.id}`} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <img src={product.imgSrc} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className='btn btn-primary mx-3'>{product.price}{" ₹"}</button>
                                                <button
                                                onClick={()=>addToCart(product.id,product.title,product.imgSrc,product.price,product.description)}
                                                className='btn btn-warning'>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product