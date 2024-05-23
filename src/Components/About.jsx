import React from 'react'
import { Col, Row } from 'react-bootstrap'
import book from '../Assets/book.png'
import doSection from '../Assets/do-section.png'

function About() {
    return (
        <div className='py-5'>
            <Row className='g-0'>
                <Col xs={7} md={9}>
                    <div className='d-flex justify-content-end align-items-center h-100'>
                        <img src={book} alt="" className='img-fluid ' style={{ width: "85%" }} />
                    </div>
                </Col>
                <Col className='pe-md-5 ps-3' xs={5} md={3}>
                    <div className='d-flex justify-content-center  h-100 w-100 pe-lg-5 '>
                        <h4 className='' style={{ color: "#000", fontWeight: "lighter" }}><span style={{ fontSize: "35px", color: "#000", fontWeight: "bolder" }}>Who </span>we are welcome to Inkid, where education meets character,and values shapes futures .At Inkid, we believe in going beyond textbooks,nurtring not just smart minds, but good hearts. Explore the journey of holistic learning with us</h4>
                    </div>
                </Col>
                <Col xs={6} className='py-4'>
                    <div className=' d-flex justify-content-end align-items-center h-100 '>
                        <div className='box-about shadow  px-5 pb-5 d-none d-md-block' style={{ width: "75%", height: "85%", borderRadius: "100px" }}>
                            <div className='d-flex justify-content-center w-100'>
                                <div style={{ width: "50px", height: "50px ", borderRadius: "50%", backgroundColor: "#9dbeb999", position: "relative", bottom: "25px" }} className='d-flex justify-content-center align-items-center p-2'>
                                    <div style={{ backgroundColor: "#c0dfedb3", width: "30px", height: "30px ", borderRadius: "50%" }}></div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{ position: "relative", bottom: "25px" }}>
                                <span style={{ fontSize: "clamp(3.125rem, -7.6989rem + 23.0909vw, 11.0625rem)", fontWeight: "lighter" }} className='mt-md-4 mt-lg-0'>?</span>
                                <div className='d-flex flex-column '>
                                    <h3 style={{ fontSize: "clamp(3.125rem, -1.1364rem + 9.0909vw, 6.25rem)", fontWeight: "bold", position: "relative", top: "40px" }} className='mb-0'>What</h3>
                                    <h3 style={{ fontSize: "clamp(2.5rem, -2.6136rem + 10.9091vw, 6.25rem)", fontWeight: "lighter" }} className='mb-0 mt-md-3 mt-lg-0'>we do</h3>
                                </div>
                            </div>
                            <div className='px-5' style={{ position: "relative", bottom: "25px" }}>
                                <h4 style={{ fontWeight: "lighter", fontSize: "clamp(0.75rem, 0.0682rem + 1.4545vw, 1.25rem)" }}>We offer a comprehensive solution for moral education in your school, grounded in both communicative Arabic and English</h4>
                            </div>
                        </div>
                        <div className='box-about shadow pb-5 d-block d-md-none ' style={{ width: "85%", height: "85%", borderRadius: "54px" }}>
                            <div className='d-flex justify-content-center w-100'>
                                <div style={{ width: "40px", height: "40px ", borderRadius: "50%", backgroundColor: "#9dbeb999", position: "relative", bottom: "20px" }} className='d-flex justify-content-center align-items-center p-2'>
                                    <div style={{ backgroundColor: "#c0dfedb3", width: "20px", height: "20px ", borderRadius: "50%" }}></div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'  style={{ position: "relative", bottom: "25px" }}>
                                <span style={{ fontSize: "57px", fontWeight: "lighter" }}>?</span>
                                <div className='d-flex flex-column '>
                                    <h3 style={{ fontSize: "35px", fontWeight: "bold", position: "relative", top: "13px" }} className='mb-0'>What</h3>
                                    <h3 style={{ fontSize: "34px", fontWeight: "lighter" }} className='mb-0'>we do</h3>
                                </div>
                            </div>
                            <div className='px-2 pb-4'  style={{ position: "relative", bottom: "25px" }}>
                                <h6 style={{ fontWeight: "lighter" }}>We offer a comprehensive solution for moral education in your school, grounded in both communicative Arabic and English</h6>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={6} className='pe-md-5 py-4'>
                    <div className='pe-5 d-flex align-items-center h-100'>
                        <div className='p-lg-4'>
                            <img src={doSection} alt="" className='img-fluid' />
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default About