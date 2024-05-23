import React from 'react'
import { Col, Row } from 'react-bootstrap'
import cart from '../Assets/carrttt-01.png'
import globe from '../Assets/globe.png'
import settings from '../Assets/settings.png'
import teaching from '../Assets/teaching.png'

function Solution() {
    return (
        <div className='pb-5'>
            <div className='d-flex justify-content-center'>
                <span style={{ fontSize: "25px", fontWeight: "bold" }} className=''>Why <span style={{ fontSize: "18px", fontWeight: "lighter" }}>Choose us</span></span>
            </div>
            <div className='px-lg-5 mx-lg-5'>
                <Row className='d-flex justify-content-center g-0 px-lg-5 pt-3 p-md-3'>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <i class="fa-solid fa-chevron-left fa-2xl"></i>
                    </Col>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div style={{ backgroundColor: "#b8dcdec9", width: "200px", height: "250px", borderRadius: "10px" }} className='shadow '>
                            <div className='d-flex justify-content-end' style={{ borderBottom: "1px solid white" }}>
                                <i className="fa-solid fa-chevron-down fa-lg py-3 me-3"></i>
                            </div>
                            <div className='w-100 d-flex justify-content-center mt-2'>
                                <div style={{ borderRadius: "50%", backgroundColor:"white"}} className='p-2'>
                                    <img src={globe} alt="" style={{width:"30px"}}/>
                                </div>
                            </div>
                            <div className='mt-4 p-1'>
                                <h4 className='text-center' style={{fontSize:"clamp(0.625rem, 0.3472rem + 1.1111vw, 1.25rem)", fontWeight:"lighter"}}>Moral education with communicative Arabic & Englsih</h4>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div style={{ backgroundColor: "#b8dcdec9", width: "200px", height: "250px", borderRadius: "10px" }} className='shadow mx-1'>
                            <div className='d-flex justify-content-end' style={{ borderBottom: "1px solid white" }}>
                                <i className="fa-solid fa-chevron-down fa-lg py-3 me-3"></i>
                            </div>
                            <div className='w-100 d-flex justify-content-center mt-2'>
                                <div style={{ borderRadius: "50%", backgroundColor:"white"}} className='p-2'>
                                    <img src={settings} alt="" style={{width:"30px"}}/>
                                </div>
                            </div>
                            <div className='mt-4 p-1'>
                                <h4 className='text-center' style={{fontSize:"clamp(0.625rem, 0.3472rem + 1.1111vw, 1.25rem)", fontWeight:"lighter"}}>Child friendly syllabus</h4>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex justify-content-center'>
                        <div style={{ backgroundColor: "#b8dcdec9", width: "200px", height: "250px", borderRadius: "10px" }} className='shadow'>
                            <div className='d-flex justify-content-end' style={{ borderBottom: "1px solid white" }}>
                                <i className="fa-solid fa-chevron-down fa-lg py-3 me-3"></i>
                            </div>
                            <div className='w-100 d-flex justify-content-center mt-2'>
                                <div style={{ borderRadius: "50%", backgroundColor:"white"}} className='p-2'>
                                    <img src={teaching} alt="" style={{width:"30px"}}/>
                                </div>
                            </div>
                            <div className='mt-4 p-1'>
                                <h4 className='text-center' style={{fontSize:"clamp(0.625rem, 0.3472rem + 1.1111vw, 1.25rem)", fontWeight:"lighter"}}>Comprehensive teacher's training</h4>
                            </div>
                        </div>
                    </Col>
                    
                    <Col className='d-flex justify-content-start align-items-center'>
                        <i class="fa-solid fa-chevron-right fa-2xl"></i>
                    </Col>
                </Row>
            </div>
            <div className='w-100' style={{ position: "relative", bottom: "100px" }}>
                <img src={cart} alt="" className='img-fluid' />
            </div>
        </div>
    )
}

export default Solution