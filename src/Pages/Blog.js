import React from 'react';
import BlogCard from '../Components/BlogCard';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Meta from '../Components/Meta';

const Blog = () => {
  return (
    <>
      <Meta tittle={"Blogs"} />
      <BreadCrumb tittle="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Find By Categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Watches</li>
                                <li>Telivision</li>
                                <li>Cameras</li>
                                <li>Laptops</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                    <div className="col-6 mb-3">
                          <BlogCard />
                        </div>

                        <div className="col-6 mb-3">
                          <BlogCard />
                        </div>

                        <div className="col-6 mb-3">
                          <BlogCard />
                        </div>

                        <div className="col-6 mb-3">
                          <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default Blog;
