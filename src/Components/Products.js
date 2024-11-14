import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const Products = () => {
    const items =useSelector((state)=>state.allCart.items)
    const cart=useSelector((state)=>state.allCart.cart)
    console.log("Cart Items",cart)
    const dispatch= useDispatch();

    console.log(items)
    
    return (
        <div className='container'>
            <div className='row'>
                {

                    items.map((item) => (
                        <div key={item.id} className='container col-md-4 my-5'>
                            <div className="card bg-dark" style={{ width: "18rem" }}>
                                <div className='p-3 d-flex justify-content-center align-items-center'>
                                    <img src={item.imgsrc} className="card-img-top" alt="..." style={{width:'200px',height:'200px',borderRadius:'10px'}} />
                                    </div>
                                
                                <div className="card-body text-light text-center">
                                    <h5 className="card-title ">{item.title}</h5>
                                    <p className="card-text">{item.description}
                                    </p>
                                    <button className='btn btn-primary mx-3'>{item.price}  ₹ </button>
                                    <button  className='btn btn-warning' onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
                                    
                                </div>
                            </div>

                        </div>
                    ))


                }
            </div>
        </div>

    )
}

export default Products;