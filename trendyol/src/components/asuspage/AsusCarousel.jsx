import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { asus_diger } from "../../assets/data"

function AsusCarousel() {
    const state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            700: {
                items: 3,
            },
            900: {
                items: 4,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 5,
            },
        },
    }
    return (
        <>
            <div className="asus-carousel-con">
                <div className='container-fluid' >
                    <div className="text-con d-flex">
                        <h2>Benzer Ürünler</h2>
                    </div>
                    <OwlCarousel
                        items={5}
                        className="owl-theme"
                        loop={false}
                        nav margin={8}
                        responsive={state.responsive}
                    >
                        {
                            asus_diger?.map(asus => {
                                return (
                                    <div key={asus.id}>
                                        <a href="/">
                                            <div className="card asus-card" >
                                                <div className="card-left-top-con">
                                                    <div className="img" style={{ display: `${asus?.imgleftdisplay}` }}>
                                                        <img src={asus?.imgleft} alt="" />
                                                    </div>
                                                </div>
                                                <div className="card-right-top-con">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.025 3.07565C22.6537 3.73057 23.1503 4.50596 23.4884 5.35646L21.1652 6.28001C20.9447 5.72527 20.623 5.22519 20.2214 4.80686L20.2207 4.80614C19.8195 4.38782 19.3466 4.05945 18.8306 3.83661C18.3147 3.61379 17.764 3.5 17.2095 3.5C16.655 3.5 16.1043 3.61379 15.5884 3.83661C15.0766 4.05763 14.6071 4.38245 14.2081 4.79588L14.2065 4.79757L13.8325 5.20061C13.3596 5.7101 12.696 5.99974 12.0009 6C11.3058 6.00026 10.642 5.71111 10.1688 5.20197L9.79403 4.79874L9.7918 4.79632C8.983 3.95874 7.90254 3.5006 6.78997 3.5006C5.67286 3.5006 4.58811 3.96249 3.77824 4.80661C2.96652 5.65265 2.5 6.813 2.5 8.03541C2.5 9.25782 2.96652 10.4182 3.77824 11.2642L11.9997 19.8334L20.2212 11.2642C20.6227 10.8459 20.9447 10.3455 21.1652 9.79081C21.3858 9.23601 21.5 8.63934 21.5 8.03541C21.5 7.43147 21.3858 6.83481 21.1652 6.28001L23.4884 5.35646C23.8265 6.20691 24 7.1171 24 8.03541C24 8.95371 23.8265 9.86391 23.4884 10.7144C23.1503 11.5648 22.6538 12.3401 22.0252 12.995L12.7213 22.6923C12.5327 22.8889 12.2721 23 11.9997 23C11.7273 23 11.4667 22.8889 11.2781 22.6923L1.97426 12.995C0.705738 11.6728 0 9.8881 0 8.03541C0 6.18272 0.705738 4.39798 1.97426 3.07582C3.24413 1.75224 4.9755 1.0006 6.78997 1.0006C8.18377 1.0006 9.52853 1.44411 10.6527 2.24969C10.9921 2.49283 11.3113 2.76895 11.6057 3.07582C11.6123 3.08271 11.6188 3.08969 11.6252 3.09677L12 3.5L12.374 3.09696C12.3805 3.08987 12.387 3.08288 12.3936 3.07599C12.6852 2.77192 13.0026 2.49653 13.3417 2.25301C13.7334 1.97168 14.154 1.73288 14.5972 1.5415C15.424 1.1844 16.3118 1 17.2095 1C18.1071 1 18.9949 1.1844 19.8218 1.5415C20.6484 1.89849 21.3967 2.4205 22.025 3.07565ZM9.77239 4.77516L9.78536 4.7893C9.78101 4.78461 9.77668 4.7799 9.77239 4.77516Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <img src={asus?.img} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text" >
                                                        {asus?.textp}
                                                        <span> {asus?.textspan} </span>
                                                    </p>
                                                    <div className="star-con" style={{ height: "14px", marginBottom: "5px" }}>
                                                        <div className="star-fluit d-flex" style={{ display: `${asus?.star}` }}>
                                                            <img style={{ width: "10px", height: "10px", marginRight: "2px", border: "0" }} src="img/laptop/star.svg" alt="" />
                                                            <img style={{ width: "10px", height: "10px", marginRight: "2px", border: "0" }} src="img/laptop/star.svg" alt="" />
                                                            <img style={{ width: "10px", height: "10px", marginRight: "2px", border: "0" }} src="img/laptop/star.svg" alt="" />
                                                            <img style={{ width: "10px", height: "10px", marginRight: "2px", border: "0" }} src="img/laptop/star.svg" alt="" />
                                                            <img style={{ width: "10px", height: "10px", marginRight: "2px", border: "0" }} src="img/laptop/star.svg" alt="" />
                                                            <img style={{ width: "15px", height: "12px", marginLeft: "5px" }} src="img/laptop/cam.webp" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="money">
                                                        <h5> {asus?.money} </h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default AsusCarousel