import React, { useEffect, useState } from 'react'
import AOS from "aos"

function Carousel({ carousels }) {
    const aosAnimate = () => {
        const anima1 = document.querySelectorAll(".anima1")
        const anima2 = document.querySelectorAll(".anima2")
        const anima3 = document.querySelectorAll(".anima3")
        const anima4 = document.querySelectorAll(".anima4")
        anima1.forEach(e=>{
            e.style.animation = "movedown 1s ease-in-out";
        })
        anima2.forEach(e=>{
            e.style.animation = "moveshow 2s ease-in-out";
        })
        anima3.forEach(e=>{
            e.style.animation = "moveright 1s ease-in-out";
        })
        anima4.forEach(e=>{
            e.style.animation = "moveup 1s ease-in-out";
        })
    }
    
    


    // var box = document.getElementById("box1234")
    window.onscroll = function() {myFunction()};
    function myFunction(){
        if(document.documentElement.scrollTop > 350){ 
            document.getElementById("box1234").style.display = "block"
        }else{
            document.getElementById("box1234").style.display = "none"
        }
    }
   

    
    // let position = 1000 ;
    // window.scrollTo({
    //     top:position,
    //     display:"flex",
    // })
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                 {/* <div className="carousel-indicators">
                    {
                        carousels.map(carousel => {
                            return (
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            )
                        })
                    }
                </div> */}
                <div className="carousel-inner">
                    {
                        carousels?.map(carousel => {   
                            return (
                                <div className={carousel.id == 0 ? "active carousel-item aktif2" : "carousel-item aktif2" } style={{ backgroundImage: `url(${carousel?.imgurl})` }}>
                                    <div className="card card-aos">
                                        <img src={carousel?.imgurle} className="card-img-top anima1" alt="..." />
                                        <div className="card-body" style={{ padding: "0" }}>
                                            <h2 className="card-title anima2">  {carousel?.text} </h2>
                                            <h1 className="card-text anima3" > {carousel?.title} </h1>
                                            <div className="buttons mt-4 d-flex w-100 anima4 p-0">
                                                <a href="/" style={{ marginLeft: "0" }} className="btn btn-secondary "><p>EĞİTİM DETAYI</p></a>
                                                <a href="/kayit" className="btn btn-danger mx-2">ŞİMDİ BAŞVUR</a>
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
            <a href="/">
                <div id='box1234' className="box1234">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" height={24} width={24} viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>
                </div>
            </a>
        </>
    )
}

export default Carousel