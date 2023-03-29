import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import {HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import blog from '../images/blog1.webp';
import Container  from '../Components/Container';


const SingleBlog = () => {

  return (
    <>
      <Meta tittle={"Dynamic Blog page"} />
      <BreadCrumb tittle="Dynamic Blog page" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                  <div className="single-blog-card">
                    <Link to="/blogs" className= "d-flex align-items-center gap-10" >
                      <HiOutlineArrowLeft className="fs-4" />Go back to Blogs
                    </Link>
                    <h3 className="title">
                      A Beautiful Sunday Morning Renaissance
                    </h3>
                      <img src={blog} className ="img-fluid w-100 my-4" alt="Blog"/>
                    <p>
                      You are only as good as your last collection, which is an enormous pressure.
                      I think there is something about luxury and it's not what people need,
                      it's something they just want. It really pulls at their heart.
                      I have a fantastic relationship with money. Mollitia exercitationem 
                      necessitatibus praesentium voluptatibus,expedita et ex fugit.It's always easier 
                      to chicken out when situations get bad than to stand up and face our fears.
                      So here's a reminder that you are strong and you should alway stand tall and face
                      your fear no matter how hard it might seem.
                    </p>
                  </div>
                </div>
            </div>
      </Container>
    </>
  )
};

export default SingleBlog;
