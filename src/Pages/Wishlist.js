import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container  from '../Components/Container';

const Wishlist = () => {
  return (
    <>
      <Meta tittle={"Wishlist"} />
      <BreadCrumb tittle="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/heel.jpg" className="img-fluid w-75" alt="heels" />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Beoplay A1 Portable Bluetooth Speaker with Microphone</h5>
                            <h6 className="price text-danger">$ 250.00</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/hat 2.jpg" className="img-fluid w-50 mb-3" alt="hat" />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Beoplay A1 Portable Bluetooth Speaker with Microphone</h5>
                            <h6 className="price text-danger">$ 250.00</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/gloves.png" className="img-fluid w-75" alt="gloves" />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Beoplay A1 Portable Bluetooth Speaker with Microphone</h5>
                            <h6 className="price text-danger">$ 250.00</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/bag.jpg" className="img-fluid w-75" alt="bag" />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Beoplay A1 Portable Bluetooth Speaker with Microphone</h5>
                            <h6 className="price text-danger">$ 250.00</h6>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default Wishlist;
