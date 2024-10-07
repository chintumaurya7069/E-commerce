import React from 'react'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container mb-5 my-5" style={{ width: '54%' }}>
        {
          cart.length == 0 ? (
            <>
              <div className='text-center'>
                <h1>Your Cart is empty</h1>
                <button>Continue </button>
              </div>
            </>
          ) :
            cart.map((product) => {
              return (
                <>
                  <div className="card mb-3" style={{ width: '700px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-center">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>
                          <div className="qty">
                            <button onClick={""} className='inc'>+</button>
                            <input value={1} type='string' style={{ width: '30px', textAlign: 'center' }}></input>
                            <button>-</button>
                          </div>
                          <button className='btn btn-primary mx-3'>{product.price}{" ₹"}</button>
                          <button
                            onClick={() => addToCart(product.id, product.title, product.imgSrc, product.price, product.description)}
                            className='btn btn-warning'>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}

      </div>
    </>
  )
}

export default Cart