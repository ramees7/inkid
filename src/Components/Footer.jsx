import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{ backgroundColor: "#274827", height: "100%", width: "100%", position: "relative", bottom: "148px", minHeight: "148px" }}>
      <Row className='g-0' style={{ position: "relative", top: "75px" }}>
        <Col md={6} lg={3} className='d-flex justify-content-center'>
          <div className='d-flex align-items-center' >
            <span style={{ fontSize: "clamp(4.0625rem, 3.2292rem + 3.3333vw, 5.9375rem)", fontWeight: "lighter" }} className=''>?</span>
            <div className='d-flex flex-column '>
              <h3 style={{ fontSize: "clamp(3.125rem, 2.4306rem + 2.7778vw, 4.6875rem)", fontWeight: "bold", position: "relative", top: "6px" }} className='mb-0'>Where</h3>
              <h3 style={{ fontSize: "clamp(2.1875rem, 1.7708rem + 1.6667vw, 3.125rem)", fontWeight: "lighter", position: "relative", bottom: "19px" }} className='mb-0 mt-md-3 mt-lg-0'>we located</h3>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className=' d-flex align-items-center '>
          <div style={{ width: "5px", backgroundColor: "green", height: "75%" }} className='d-none d-md-block'></div>
          <div className='ms-3  d-none d-lg-block '>
            <div>
              <h5>111, First floor, Neo space</h5>
              <h5>Kinfra Techno Park, Kakkanchery</h5>
              <h5>Calicut, Kerala, India</h5>
            </div>
          </div>
          <div className='ms-3  d-block d-lg-none  w-100 mt-3'>
            <div className='d-flex flex-column align-items-center w-100'>
              <h5>111, First floor, Neo space</h5>
              <h5>Kinfra Techno Park, Kakkanchery</h5>
              <h5>Calicut, Kerala, India</h5>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} className=' d-flex align-items-center ' >
          <div style={{ width: "5px", backgroundColor: "green", height: "75%" }} className='d-none d-lg-block'></div>
          <div className='ms-3 d-none d-lg-block mt-md-4 mt-lg-0'>
            <div>
              <h5>www.inkidedu.com</h5>
              <h5>info@inkidedu.com</h5>
              <h5>+91 9567843100</h5>
            </div>
          </div>
          <div className='ms-3 d-block d-lg-none w-100 my-3'>
            <div className='d-flex flex-column align-items-center w-100'>
              <h5>www.inkidedu.com</h5>
              <h5>info@inkidedu.com</h5>
              <h5>+91 9567843100</h5>
            </div>
          </div>

          <div style={{ width: "5px", backgroundColor: "green", height: "75%" }} className='d-none d-lg-none d-md-block'></div>
        </Col>
        <Col md={6} lg={3} className=' mt-md-4 '>
          <div style={{ height: "150px ", width: "150px", backgroundColor: "white", borderRadius: "50px" }} className='d-none d-lg-block'></div>
          <div className='d-flex justify-content-center'>
            <div style={{ height: "150px ", width: "150px", backgroundColor: "white", borderRadius: "30px" }} className='d-lg-none  mx-auto'></div>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Footer