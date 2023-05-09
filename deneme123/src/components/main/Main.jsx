import React from 'react'

function Main() {
    return (
        <>
            <div className="main-con">
                <div className="main-fluit">
                    <div className="main-box">
                        <div className="main-box2 col-lg-12 col-xl-4">
                            <div className="main-hayaller pt-5 pt-lg-0 px-xl-5">
                                <h1 className="text-center pb-3" style={{ fontSize: '2.9rem', fontWeight: 700, color: 'white', textAlign: 'center !important', paddingBottom: '1rem !important' }}>
                                    Hayallerini Erteleme</h1>
                                <div className="circle mb-md-3 mb-3 justify-content-center align-items-center d-flex">
                                    23
                                </div>
                                <h2 className="pt-md-3 text-center" style={{ fontSize: '2.4rem', color: 'white', fontWeight: 600 }}>Eğitimle
                                    Kariyerini Planla</h2>
                                <div style={{ width: 'fit-content', margin: 'auto' }}>
                                    <a href="/kayit" className="btn trainings-detail-btn btn-lg btn-danger m-auto text-center" data-toggle="modal" data-target="#training-applications" style={{ color: 'white' }}>ŞİMDİ BAŞVUR</a>
                                </div>
                                <p style={{ color: 'gray', textAlign: 'center !important' }}>Profesyonelliğe Adım At</p>
                                <div className="svg m-auto" style={{ width: '50px' }}>
                                    <a href="#trainings">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="white" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-acc">
                        <div className="accordion_gallery">
                            <div className="items item_1">
                                <div className="content">
                                    <h1 className="title" />
                                </div>
                            </div>
                            <div className="items item_2">
                                <div className="content">
                                    <h1 className="title" />
                                </div>
                            </div>
                            <div className="items item_3">
                                <div className="content">
                                    <h1 className="title" />
                                </div>
                            </div>
                            <div className="items item_4">
                                <div className="content">
                                    <h1 className="title" />
                                </div>
                            </div>
                            <div className="items item_5">
                                <div className="content">
                                    <h1 className="title" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main