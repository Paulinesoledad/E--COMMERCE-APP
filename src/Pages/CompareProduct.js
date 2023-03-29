import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Color from '../Components/Color';
import Container from '../Components/Container';
import Meta from '../Components/Meta';
import cross from '../images/cross.svg';
import watch from '../images/watch-1.jpg';



const CompareProduct = () => {
  return (
    <>
      <Meta tittle={"Compare Products"} />
      <BreadCrumb tittle="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">

            <div className="col-3">
                <div className="compare-product-card position-relative">
                <img src={cross} alt="cross" className="position-absolute cross" />
                  <div className="product-card-image">
                    <img src={watch} alt="Watch" />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">
                      Honor T1 7.01GB RAM 8GB ROM 7 inch with Wi-Fi + 3GB Tablet
                    </h5>
                    <h6 className="price mb-3">$ 100 </h6>
                    <div>
                    <div className="product-detail">
                        <h5>Brands:</h5>
                        <p>Havels</p>
                    </div>

                    <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Tablet Computers</p>
                      </div>

                      <div className="product-detail">
                        <h5>SKU:</h5>
                        <p>SKU1234</p>
                      </div>

                      <div className="product-detail">
                        <h5>Availability</h5>
                        <p>In Stock</p>
                      </div>

                      <div className="product-detail">
                        <h5>Color:</h5>
                        <Color />
                      </div>

                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src={cross} alt="cross" className="position-absolute cross" />
                <div className="product-card-image">
                  <img className='w-75 mb-3 ' src="images/speakerpod.jpg" alt="speaker" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.01GB RAM 8GB ROM 7 inch with Wi-Fi + 3GB Tablet
                  </h5>
                  <h6 className="price mb-3">$ 100 </h6>
                  <div>
                  <div className="product-detail">
                      <h5>Brands:</h5>
                      <p>Havels</p>
                  </div>

                  <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Tablet Computers</p>
                    </div>

                    <div className="product-detail">
                      <h5>SKU:</h5>
                      <p>SKU1234</p>
                    </div>

                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>

                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross" />
                <div className="product-card-image">
                  <img className="w-75 mb-3"  src="images/acc.jpg" alt="acc" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.01GB RAM 8GB ROM 7 inch with Wi-Fi + 3GB Tablet
                  </h5>
                  <h6 className="price mb-3">$ 100 </h6>
                  <div>
                  <div className="product-detail">
                      <h5>Brands:</h5>
                      <p>Havels</p>
                  </div>

                  <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Tablet Computers</p>
                    </div>

                    <div className="product-detail">
                      <h5>SKU:</h5>
                      <p>SKU1234</p>
                    </div>

                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>

                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross" />
                <div className="product-card-image">
                  <img className="w-75 mb-3"  src="images/headphone2.jpg" alt="Headphone" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.01GB RAM 8GB ROM 7 inch with Wi-Fi + 3GB Tablet
                  </h5>
                  <h6 className="price mb-3">$ 100 </h6>
                  <div>
                  <div className="product-detail">
                      <h5>Brands:</h5>
                      <p>Havels</p>
                  </div>

                  <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Tablet Computers</p>
                    </div>

                    <div className="product-detail">
                      <h5>SKU:</h5>
                      <p>SKU1234</p>
                    </div>

                    <div className="product-detail">
                      <h5>Availability</h5>
                      <p>In Stock</p>
                    </div>

                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>
      </Container>
    </>
  )
}

export default CompareProduct;
