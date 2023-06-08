import React from 'react'
import { asus_carousel } from "../../assets/data"
import AsusLeftBot from './AsusLeftBot'

function AsusLeftTop() {
    return (
        <>
            <div className="carousel-con me-4">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="asus-carousel-left-top">
                            <div className="free">
                                <svg style={{ width: "32px", height: "16px" }} xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-box" viewBox="0 0 16 16">
                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                </svg>
                                <p>KARGO BEDAVA</p>
                            </div>
                            <div className="kurumsal">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill='white' viewBox="0 0 384 512">
                                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                </svg>

                                <p>KURUMSAL FATURA</p>
                            </div>
                        </div>
                        {
                            asus_carousel?.map(asus => {
                                return (
                                    <div key={asus.id} className={asus.id == 1 ? "carousel-item active" : "carousel-item"}>
                                        <img src={asus.img} className="d-block w-100" alt="..." />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <AsusLeftBot />
            </div>
        </>
    )
}

export default AsusLeftTop