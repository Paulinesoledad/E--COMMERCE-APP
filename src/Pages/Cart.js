import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import headphone2 from '../images/headphone2.jpg';
import { RiDeleteBinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';



const Cart = () => {
  return (
    <>
      <Meta tittle={"Cart"} />
      <BreadCrumb tittle="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
              <div className="row">
                   <div className="col-12">
                   <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                          <h4 className="cart-col-1">PRODUCT</h4>
                          <h4 className="cart-col-2">PRICE</h4>
                          <h4 className="cart-col-3">QUANTITY</h4>
                          <h4 className="cart-col-4">TOTAL</h4>
                      </div>

                      <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                          <div className="cart-col-1 d-flex gap-15 align-items-center">
                             <div className='w-25'>
                                <img src={headphone2} className="img-fluid" alt="product image" />
                             </div>
                             <div className='w-75'>
                                <p>Headphone bulk 10 pack, diferent colours</p>
                                <p>Colour : Wine</p>
                                <p>Size : S</p>
                             </div>
                          </div>

                          <div className="cart-col-2">
                             <h5 className="price">$499.99</h5>
                          </div>

                          <div className="cart-col-3 d-flex align-items-center gap-15">
                             <div>
                                <input className="form-control" type="number" name="" min={1} max={10} id="" />
                             </div>

                             <div>
                                <RiDeleteBinFill />
                             </div>
                          </div>

                          <div className="cart-col-4">
                             <h5 className="price">$499.99</h5>
                          </div>
                      </div>
                   </div>

                   <div className="col-12 py-2 mt-4">
                      <div className="d-flex justify-content-between align-items-baseline">
                          <Link to="/product" className="button">Continue Shopping</Link>
                          <div className="d-flex flex-column align-items-end">
                           <h4>Sub Total : $499.99</h4>
                           <p>Taxes and shipping calculated at checkout</p>
                           <Link to="/checkout" className="button">Checkout</Link>
                          </div>
                      </div>
                   </div> 
              </div>
      </Container>
    </>
  )
};

export default Cart;
