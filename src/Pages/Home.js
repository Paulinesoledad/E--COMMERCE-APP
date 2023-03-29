import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import Container from '../Components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE.</h4>
                  <h5>Laptops Max.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Smart Watch 7.</h5>
                  <p>From $599 or<br /> $41.62/mo for 12mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Buy iPad Air.</h5>
                  <p>Shop the latest brands<br /> styles and colours</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Airpods Max.</h5>
                  <p>High-fidelity playback &<br />Ultra-low distortion</p>
                </div>
              </div>
            
              </div>
            </div>
          </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map((i, j)=>{
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                      </div>
                    );
                })}
              </div>
            </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Pro Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Pro Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
              </div>
            </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wraper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-1.jpg" className="img-fluid"  alt="Famous image" />
                <div className="famous-content position-absolute ">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
          </div>

          <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-4.jpg" className="img-fluid famous-image"  alt="Famous image" />
                <div className="famous-content position-absolute ">
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 units of brightness.</h6>
                  <p>27-inch 5k Retina display</p>
                </div>
              </div>
          </div>

          <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-2.webp" className="img-fluid famous-image"  alt="Famous image" />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">SMARTPHONES</h5>
                  <h6 className="text-dark">Smartphone 14 pro.</h6>
                  <p className="text-dark">Now in blue for $999.00 or $41.62/mo for 24 mo footnote</p>
                </div>
              </div>
          </div>

          <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous4.webp" className="img-fluid famous-image"  alt="Famous image" />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">HOME SPEAKERS</h5>
                  <h6 className="text-dark">Room-Filling Sounds.</h6>
                  <p className="text-dark">From $699.00 or $116.58/mo for 12 mo.</p>
                </div>
              </div>
          </div>

        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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
          <ProductCard />
        </div>
      </Container>

      <Container class1="marquee-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">

                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="Brand" />
                </div>

                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="Brand" />
                </div>

              </Marquee>
              </div>
            </div>
          </div>
      </Container>
     
      <Container class1="blog-wrapper py-5 home-wraper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            
          </div>

          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

            <div className="col-3">
              <BlogCard />
            </div>

          </div>
      </Container>
    </>
  )
};

export default Home;
