import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';


const Resetpassword = () => {
  return (
    <>
      <Meta tittle={"Reset Password"} />
      <BreadCrumb tittle="Reset Password" />
      <Container  class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Reset Password</h3>
                        <form action="" className="d-flex flex-column gap-15">
                            <CustomInput type="password" name="password" placeholder="New Password" />
                            <CustomInput type="password" name="confpassword" placeholder="Confirm Password" />
                            
                            <div>
                                <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                                    <button className="button border-0" type="submit">Reset</button>
                                    
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

export default Resetpassword;
