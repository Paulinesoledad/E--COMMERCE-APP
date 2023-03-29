import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container  from '../Components/Container';
import CustomInput from '../Components/CustomInput';


const SignUp = () => {
  return (
    <>
      <Meta tittle={"Sign Up"} />
      <BreadCrumb tittle="Sign Up" />
      <Container class1="signup-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Create Account</h3>
                            <form action="" className="d-flex flex-column gap-15">

                                <CustomInput type="text" name="name" placeholder="Name" />
                                <CustomInput type="tel" name="mobile" placeholder="Email" />
                                <CustomInput type="email" name="email" placeholder="Mobile Number" />
                                <CustomInput type="password" name="password" placeholder="Password" />

                                <div>
                                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0">Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
      </Container>
    </>
  );
};

export default SignUp;
