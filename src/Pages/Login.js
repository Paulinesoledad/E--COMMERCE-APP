import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom'
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';

const Login = () => {
  return (
    <>
      <Meta tittle={"Login"} />
      <BreadCrumb tittle="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action="" className="d-flex flex-column gap-15">

                                <CustomInput type="email" name="email" placeholder="Email" />
                                <CustomInput type="password" name="password" placeholder="Password" />
                                

                                <div>
                                    <Link to= "/forgot-password">Forgot password?</Link>
                                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0" type="submit">Login</button>
                                        <Link to= "/signup" className="button signup" >Sign Up</Link>
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

export default Login;
