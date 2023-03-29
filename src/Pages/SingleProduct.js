import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import ReactStars  from 'react-rating-stars-component';
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color  from  '../Components/Color';
import { TbGitCompare } from 'react-icons/tb';
import{ AiOutlineHeart } from 'react-icons/ai';
import Container  from '../Components/Container';



const SingleProduct = () => {
    const props = {width: 400, height: 500, zoomWidth: 600, img: "https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799"};
    const [orderedProduct , setorderedProduct ] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

    return (
    <>
      <Meta tittle={"Product Names"} />
      <BreadCrumb tittle="Product Names" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                            <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                        <div><img src="https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799" className="img-fluid" alt="" /></div>
                        <div><img src="https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799" className="img-fluid" alt="" /></div>
                        <div><img src="https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799" className="img-fluid" alt="" /></div>
                        <div><img src="https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799" className="img-fluid" alt="" /></div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className="border-bottom">
                            <h3 className="title">Kids Headphones bulk 10 pack multi-coloured for students</h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className="price">$198.99</p>
                            <div className="d-flex align-items-center gap-10">
                                <ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" />
                                <p className="mb-0 t-review">( 2 reviews )</p>
                            </div>
                            <a className="review-btn" href="#review">Write a Review</a>
                        </div>

                        <div className=" py-3">
                            <div className="d-flex align-items-center gap-10 my-2">
                                <h3 className="product-heading" >Type</h3> 
                                <p className="product-data">Headphone</p>
                            </div>

                            <div className="d-flex align-items-center gap-10 my-2">
                                <h3 className="product-heading">Brand</h3> 
                                <p className="product-data">Harvels</p>
                            </div>

                            <div className="d-flex align-items-center gap-10 my-2">
                                <h3 className="product-heading">Category</h3> 
                                <p className="product-data">Computers</p>
                            </div>

                            <div className="d-flex align-items-center gap-10 my-2">
                                <h3 className="product-heading">Tags</h3> 
                                <p className="product-data">Watch</p>
                            </div>

                            <div className="d-flex align-items-center gap-10 my-2">
                                <h3 className="product-heading">Availabiliy</h3> 
                                <p className="product-data">In stock</p>
                            </div>

                            <div className="d-flex flex-column gap-10 mt-2 mb-3">
                                <h3 className="product-heading">Size</h3> 
                               <div className="d-flex flex-wrap gap-15">
                                <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                               </div>
                            </div>

                            <div className="d-flex flex-column gap-10 mt-2 mb-3">
                                <h3 className="product-heading">Colour</h3> 
                                <Color />
                            </div>

                            <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-3">
                                <h3 className="product-heading">Quantity</h3> 
                                <div className=''>
                                    <input type="number" name="" min={1} max={10} style={{width:"70px"}}  className='form-control' id="" />
                                </div>
                                <div className="d-flex align-items-center gap-30 ">
                                    <button className="button border-0" type="submit">Add To Cart</button>
                                    <button to= "/signup" className="button signup" >Buy It Now</button>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-15">
                                <div>
                                    <a href=""><TbGitCompare className='fs-5 me-2'/> Add to compare</a>
                                </div>

                                <div>
                                    <a href=""><AiOutlineHeart className='fs-5 me-2'/> Add to wishlist</a>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-10 my-3">
                                <h3 className="product-heading" >Shipping & Returns</h3> 
                                <p className="product-data">
                                    Free shipping and returns are available on all orders! <br />
                                    We ship all US domestic orders within <b>5-10 business days!</b>
                                </p>
                            </div>

                            <div className="d-flex align-items-center gap-10 my-3">
                                <h3 className="product-heading" >Product Link</h3> 
                                <a href="javascript:void(0);" onClick={()=>{copyToClipboard("https://cdn.shopify.com/s/files/1/0266/1371/0884/products/7_df138706-1b15-4e94-b297-189068d12e40-sw.png?v=1659590799")}}>
                                    Copy Product Link
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
      </Container>
      
       <Container class1="description-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Culpa, dolores odio. Consequatur illo assumenda ipsam in soluta 
                                earum quidem. At nostrum, 
                                cupiditate aut velit animi quam sed ad consequatur minus!
                            </p>
                        </div>
                    </div>
                </div>
       </Container>

       <Container class1="review-wrapper home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex gap-10 align-items-center">
                                        <ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" />
                                        <p className="mb-0">Based on 2 reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className="text-dark text-decoration-underline" href="">Write A Review</a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <ReactStars count={5} size={24} value="" edit={true} activeColor="#ffd700" />

                                    <div>
                                        <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                                    </div>

                                    <div className="d-flex justify-content-end">
                                        <button className=" button  border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex g-10 align-items-center">
                                        <h6 className="mb-0">Ajanlekoko</h6>
                                        <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                                    </div>
                                    <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sapiente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       </Container>

      <Container class1="popular-wrapper py-5 home-wraper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
    </>
  )
};

export default SingleProduct;
