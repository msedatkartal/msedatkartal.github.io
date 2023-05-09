import React from 'react'
import AOS from "aos"
import $ from 'jquery';

function Carousel({ carousels }) {
    AOS.init();
    const aosAnimate = () => {
        document.getElementsByClassName("animation1")
        document.getElementsByClassName("animation2")
        document.getElementsByClassName("animation3")
        document.getElementsByClassName("animation4")

    }
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    {
                        carousels.map(carousel => {
                            return (
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active aktif">
                        <div className="card card-aos">
                            <img src="img/egitmen-1.png" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="500">OĞUZ HAKAN AKSU İLE</h5>
                                <p className="card-text" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="1000">
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi</p>
                                <div className="buttons d-flex w-100" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                                    <a href="/" className="btn btn-secondary ">EĞİTİM DETAYI</a>
                                    <a href="/kayit" className="btn btn-danger mx-2">ŞİMDİ BAŞVUR</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        carousels?.map(carousel => {
                            return (

                                <div className="carousel-item aktif2" style={{ backgroundImage: `url(${carousel?.imgurl})` }}>
                                    <div className="card card-aos">
                                        <img src={carousel?.imgurle} className="card-img-top animation1" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title animation2"> {carousel?.text} </h5>
                                            <p className="card-text animation3"> {carousel?.title} </p>
                                            <div className="buttons animation4  d-flex w-100">
                                                <a href="/" className="btn btn-secondary mx-2 "><p>EĞİTİM DETAYI</p></a>
                                                <a href="/" className="btn btn-danger">ŞİMDİ BAŞVUR</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" data-mdb-toggle="animation" onClick={aosAnimate} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" onClick={aosAnimate} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel