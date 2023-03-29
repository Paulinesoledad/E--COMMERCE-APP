import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Meta from '../Components/Meta';

const RefundPolicy = () => {
  return (
    <>
      <Meta tittle={"Refund Policy"} />
      <BreadCrumb tittle="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
      </Container>
    </>
  )
};

export default RefundPolicy;
