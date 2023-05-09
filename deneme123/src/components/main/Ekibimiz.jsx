import React from 'react'
import { useState } from 'react'

function Ekibimiz() {
    const card_list = [
        {
            id: 1,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 2,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 3,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 4,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 5,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 6,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 7,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
        {
            id: 8,
            imgurl: "img/bilginet/bilginet/ekibimiz/ali-emir.webp"
        },
    ]
    const [cards, setCards] = useState(card_list)
    return (
        <>
            <div>
                <main>
                    <div className="ekibimiz-head">
                        <h1 style={{ paddingBottom: '15px' }} className="title-underline">Ekibimiz</h1>
                    </div>
                    <div className="gradient-bottom" />
                    <div className="container">
                        <div className="left-ekip">
                            <img style={{ width: '100%', height: '100%' }} src="img/bilginet/bilginet/ekibimiz/mustafa-yelbey.png" alt="" />
                        </div>
                        <div className="right-ekip">
                            <p>
                                Değişen dünyada, değişimin kendisi olmak önemlidir. Değişimi
                                yaratmak isteyen insanlar için oluşturduğumuz sistem, sizleri
                                geleceği yakalamaya davet ediyor. Eğitimlerimize istediğiniz zaman
                                ve yerden ulaşabileceksiniz.
                            </p>
                            <p>Bizler bunun sağlayıcısı olduğumuz için çok mutluyuz.</p>
                            <div className="right-alt">
                                <img className="resim" src="img/bilginet/bilginet/ekibimiz/yelbey-imza.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="team-container">
                        <div className="ekip">
                            <h2>Yönetim Kadromuz</h2>
                        </div>
                        <div className="team d-flex">
                            <div className="team-1 pb-3">
                                <h5 style={{ textAlign: 'center', paddingTop: '420px', color: 'white' }}>
                                    Mustafa Yelbey
                                </h5>
                                <p style={{ textAlign: 'center', color: 'white' }}>Genel Müdür</p>
                            </div>
                            <div className="team-2 pb-3">
                                <h5 style={{ textAlign: 'center', paddingTop: '420px' }}>
                                    Mustafa Candar
                                </h5>
                                <p style={{ textAlign: 'center' }}>
                                    İnsan Kaynakları &amp; Kurumsal Gelişim Müdürü
                                </p>
                            </div>
                            <div className="team-3 pb-3">
                                <h5 style={{ textAlign: 'center', paddingTop: '400px' }}>
                                    Ramazan Başan
                                </h5>
                                <p style={{ textAlign: 'center' }}>Genel Müdür Yardımcısı</p>
                                <p style={{ textAlign: 'center' }}>Projeler ve İş Geliştirme</p>
                            </div>
                        </div>
                    </div>
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Bilgi Teknolojileri Kadromuz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                {
                                    cards?.map(card => {
                                        return (
                                            <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                                <div className="card text-bg-light">
                                                    <img src={card?.imgurl} className="card-img-top" alt="..." />
                                                    <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                                        <h5 className="card-title align-text-bottom">Card title</h5>
                                                        <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* </div>
      </div> */}
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Hukuk Departmanı Kadromuz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>İdari Kadromuz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Satış Sonrası Hizmetler Kadromuz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Öğrenci İşleri Kadromuz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Bursa Ofisimiz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subelerimiz" style={{ width: '75%', margin: 'auto', marginTop: '5%' }}>
                        <h2 className="text-center" style={{ color: 'white' }}>Bursa Şube</h2>
                        <div className="bursa" style={{ width: '100%', display: 'flex', marginBottom: '3%', backgroundColor: '#191C21' }}>
                            <div className="text-1 text-center" style={{ width: '100%' }}>
                                <h5 className="text-1-1">Bursa Şube</h5>
                                <h6 className="text-1-1">ÖNDÜL ELİTE OFFICES B Blok K:8 D:98, 1600 Nilüfer/Bursa</h6>
                                <h6 className="text-1-1">444 2 202</h6>
                                <h6 className="text-1-1">info@bilginetakademi.com.tr</h6>
                            </div>
                            <div className="photo-1" style={{ width: '100%' }}>
                                <img style={{ width: '100%' }} src="img/bilginet/bilginet/hakkimizda/bursa-ofisi.webp" alt="" />
                            </div>
                            <div className="map-1" style={{ width: '100%' }}>
                                {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                            </div>
                        </div>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Balıkesir Ofisimiz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="balikesir" style={{ width: '100%', display: 'flex', marginBottom: '3%', marginTop: '3%', backgroundColor: '#191C21' }}>
                            <div className="text-1 text-center" style={{ width: '100%' }}>
                                <h5>Balıkesir Şube</h5>
                                <h6>Anafartalar Cad. Alanlar Sk. No:35/A Net-Acar Residans D:60 Dumlupınar Mahallesi Karesi/Balıkesir</h6>
                                <h6>444 2 202</h6>
                                <h6>info@bilginetakademi.com.tr</h6>
                            </div>
                            <div className="photo-1" style={{ width: '100%' }}>
                                <img style={{ width: '100%' }} src="img/bilginet/bilginet/hakkimizda/balikesir-ofisi.webp" alt="" />
                            </div>
                            <div className="map-1" style={{ width: '100%' }}>
                                {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                            </div>
                        </div>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Eskişehir Ofisimiz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="balikesir" style={{ width: '100%', display: 'flex', marginBottom: '3%', marginTop: '3%', backgroundColor: '#191C21' }}>
                            <div className="text-1 text-center" style={{ width: '100%' }}>
                                <h5>Balıkesir Şube</h5>
                                <h6>Anafartalar Cad. Alanlar Sk. No:35/A Net-Acar Residans D:60 Dumlupınar Mahallesi Karesi/Balıkesir</h6>
                                <h6>444 2 202</h6>
                                <h6>info@bilginetakademi.com.tr</h6>
                            </div>
                            <div className="photo-1" style={{ width: '100%' }}>
                                <img style={{ width: '100%' }} src="img/bilginet/bilginet/hakkimizda/balikesir-ofisi.webp" alt="" />
                            </div>
                            <div className="map-1" style={{ width: '100%' }}>
                                {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                            </div>
                        </div>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>İzmir Ofisimiz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="balikesir" style={{ width: '100%', display: 'flex', marginBottom: '3%', marginTop: '3%', backgroundColor: '#191C21' }}>
                            <div className="text-1 text-center" style={{ width: '100%' }}>
                                <h5>İzmir Şube</h5>
                                <h6>Akdeniz Mah. Halit Ziya Blv. No:1 The Mercer Plaza Konak / İzmir</h6>
                                <h6>444 2 202</h6>
                                <h6>info@bilginetakademi.com.tr</h6>
                            </div>
                            <div className="photo-1" style={{ width: '100%' }}>
                                <img style={{ width: '100%' }} src="img/bilginet/bilginet/hakkimizda/balikesir-ofisi.webp" alt="" />
                            </div>
                            <div className="map-1" style={{ width: '100%' }}>
                                {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                            </div>
                        </div>
                        <div className="col-sm-12 justify-content-center d-flex pt-5">
                            <h2>Bursa 2 Ofisimiz</h2>
                        </div>
                        <div className="col-sm-12 blue-hr px-0">
                            <hr />
                        </div>
                        <div className="container-1">
                            <div className="row">
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-12 col-lg-4 col-md-6 g-4">
                                    <div className="card text-bg-light">
                                        <img src="img/bilginet/bilginet/ekibimiz/ali-emir.webp" className="card-img-top" alt="..." />
                                        <div className="card-img-overlay text-center align-text-bottom align-bottom d-flex justify-content-end flex-column">
                                            <h5 className="card-title align-text-bottom">Card title</h5>
                                            <p className="card-text align-text-bottom">This is a wider card with supporting text below as a natural</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="balikesir" style={{ width: '100%', display: 'flex', marginBottom: '3%', marginTop: '3%', backgroundColor: '#191C21' }}>
                                    <div className="text-1 text-center" style={{ width: '100%' }}>
                                        <h5>Bursa2 Şube</h5>
                                        <h6>ÖNDÜL ELİTE OFFICES B Blok K:8 D:98, 1600 Nilüfer/Bursa</h6>
                                        <h6>444 2 202</h6>
                                        <h6>info@bilginetakademi.com.tr</h6>
                                    </div>
                                    <div className="photo-1" style={{ width: '100%' }}>
                                        <img style={{ width: '100%' }} src="img/bilginet/bilginet/hakkimizda/balikesir-ofisi.webp" alt="" />
                                    </div>
                                    <div className="map-1" style={{ width: '100%' }}>
                                        {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Ekibimiz