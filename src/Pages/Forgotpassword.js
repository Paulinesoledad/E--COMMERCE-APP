import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';


const Forgotpassword = () => {
  return (
    <>
      <Meta tittle={"Forgot Password"} />
      <BreadCrumb tittle="Forgot Password" />
      <Container class1="forgot-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Reset Your Password</h3>
                            <p className="text-center mt-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomInput type="email" name="email" placeholder="Email" />
                                
                                <div>
                                    <div className=" mt-3 d-flex justify-content-center flex-column align-items-center gap-15">
                                        <button className="button border-0" type="submit">Submit</button>
                                        <Link to= "/login">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
      </Container>
    </>
  )
};

export default Forgotpassword;
