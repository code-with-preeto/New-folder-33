import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'
import { Link } from 'react-router-dom'

const Data = () => {
  const cart = useSelector((state)=>state.allCart.cart)
  const dispatch= useDispatch();
  return (
    <div>
       <div className='container text-center   my-5' style={{ width: "700px" }}>
        {cart.length === 0&&(
          <>
          <h1>Your Cart is Empty</h1>
          <Link to={'/'} className='btn btn-warning'>Continue  Shopping...</Link>
          </>
        )
        
       }
        

                {
                    cart.map((data) => (
                        <div key={data.id} className='container my-5'>
                            <div className="card mb-3 bg-dark text-light text-center" style={{ maxWidth: 650 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div className='p-3'><img src={data.imgsrc}className="img-fluid rounded-start" alt="..." style={{borderRadius:'10px'}}/></div>
                                        
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <button className='btn btn-primary mx-3'>{data.price}</button>
                                            <button className='btn btn-warning'>Buy Now</button>
                                            
                                            
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                {cart.length !==0&&(
                  <>
                  <button onClick={()=>dispatch(clearCart())}className='btn btn-warning'>Clear Cart</button>
                  </>
                )}
                
            </div>
            
                                            
    </div>
  )
}

export default Data