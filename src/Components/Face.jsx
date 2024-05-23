import React from 'react'
import inkWomen from '../Assets/inkwomen.png'
import './Face.css'
import { Col, Row } from 'react-bootstrap'
import logo from '../Assets/logo.png'

function Face() {
    return (
        <div className=' pt-4'>
            {/* <div className='d-flex  justify-content-center pt-5 flex-wrap'>
                <div>
                    <h1>Building Character,</h1>
                    <h1>Shaping Tomorrow with Inkid</h1>
                </div>
                <div>
                    <img src={inkWomen} alt="" style={{ width: "500px", height: "500px" }} className='img-fluid'/>
                </div>
            </div> */}
            <Row className='pt-5 g-0'>
                <Col xs={7} md={5}>
                    <div className='d-none d-md-block'>
                        <div className='d-flex justify-content-end w-100' style={{ marginLeft: "123px", marginTop: "120px" }}>
                            <div style={{ zIndex: "1", color: "#000" }}>
                                <h1 style={{ fontSize: "clamp(1.5625rem, -0.5682rem + 4.5455vw, 3.125rem)" }}>Building Character,</h1>
                                <h1 style={{ fontSize: "clamp(1.5625rem, -0.5682rem + 4.5455vw, 3.125rem)" }}>Shaping Tomorrow with Inkid</h1>
                            </div>
                        </div>
                    </div>
                    <div className='d-block d-md-none'>
                        <div className='d-flex justify-content-end w-100' style={{ marginTop: "50px", marginLeft: "50px" }}>
                            <div style={{ zIndex: "1", color: "#000" }}>
                                <h1 style={{ fontSize: "clamp(1.25rem, 0.625rem + 3.3333vw, 2.1875rem)" }}>Building Character,</h1>
                                <h1 style={{ fontSize: "clamp(1.25rem, 0.625rem + 3.3333vw, 2.1875rem)" }}>Shaping Tomorrow with Inkid</h1>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={5} md={7}>
                    <img src={inkWomen} alt="" style={{ width: "500px", height: "555px" }} className='img-fluid d-none d-md-block' />
                    <img src={inkWomen} alt="" className='img-fluid d-block d-md-none' />
                </Col>
                <Col className='d-flex justify-content-center ' xs={12} style={{ position: "relative", bottom: "80px" }}>
                    <Row className='box d-flex align-items-center px-2 g-0'>
                        <Col className='pe-1'>
                            <div style={{ backgroundColor: "#003333a1", borderRadius: "20px", height: "65px" }} className='d-flex align-items-center'>
                                <div className='p-3'>
                                    <img src={logo} alt="" className='img-fluid' />
                                </div>
                                <div className='ps-1 pe-3'>
                                    <i className="fa-solid fa-bars fa-xl text-white"></i>
                                </div>
                            </div>
                        </Col>
                        <Col xs={7} className='px-1'>
                            <div style={{ backgroundColor: "#008080b5", borderRadius: "20px", height: "65px" }} className='d-flex justify-content-evenly align-items-center'>
                                <div>
                                    <h6 className='box-content'>Face</h6>
                                </div>
                                <div>
                                    <h6 className='box-content'>About Us</h6>
                                </div>
                                <div>
                                    <h6 className='box-content'>Solution</h6>
                                </div>
                            </div>
                        </Col>
                        <Col className='ps-1'>
                            <div style={{ backgroundColor: "#009999ab", borderRadius: "20px", height: "65px" }} className='d-flex align-items-center justify-content-center'>
                                <h6 className='text-black mb-0'>Solution</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <div className='w-100 d-flex justify-content-center' style={{ position: "relative", bottom: "45px" }}>
                        <i className="fa-solid fa-circle mx-1"></i>
                        <i className="fa-solid fa-circle mx-1"></i>
                        <i className="fa-solid fa-circle mx-1"></i>  
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Face