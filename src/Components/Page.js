import { useSelector ,useDispatch} from "react-redux";
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } from "../features/cartSlice";
import { useEffect } from "react";

const  Page=()=>{
  const cart =useSelector((state)=>state.allCart.cart)
  const totalQuantity =useSelector((state)=>state.allCart.totalQuantity)
  const totalPrice=useSelector((state)=>state.allCart.totalPrice)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal());
  },[cart])
 
  return(
    <>
     <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart {cart.length} items</h5>
          </div>
          <div className="card-body">
            {
              cart.map((data)=>(
                <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  <div
                    className="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={data.image}
                      className="w-100"
                      alt="Blue Jeans Jacket"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <p>
                    <strong>{data.title}</strong>
                  </p>
                  
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-sm me-1 mb-2"
                    data-mdb-tooltip-init=""
                    title="Remove item"
                    onClick={()=>dispatch(removeItem(data.id))}
                  >
                    <i className="fas fa-trash" />
                  </button>
                  
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                    <button
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary px-3 me-2"
                      onClick={()=>dispatch(decreaseItemQuantity(data.id))}
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        id="form1"
                        min={0}
                        name="quantity"
                       Value={data.quantity}
                        type="number"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form1">
                        Quantity
                      </label>
                    </div>
                    <button
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary px-3 ms-2"
                      onClick={()=>dispatch(increaseItemQuantity(data.id))}
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                  <p className="text-start text-md-center">
                    <strong>$17.99</strong>
                  </p>
                </div>
              </div>
            ))
              
            }
            <hr className="my-4" /> 
          
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p>
              <strong>Expected shipping delivery</strong>
            </p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p>
              <strong>We accept</strong>
            </p>
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard"
            />
            <img
              className="me-2"
              width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark"
            />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity
                <span>{totalQuantity}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span>
                  <strong>{totalPrice}</strong>
                </span>
              </li>
            </ul>
            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-primary btn-lg btn-block"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
export default Page;