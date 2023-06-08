import React from 'react'
import Altun from './Altun'
import CardsLaptop from '../cards/CardsLaptop'
import Isvant from './Isvant'

function Right() {
    return (
        <>
            <div className="right-con">
                <div className="right-fluit">
                    <div className="top">
                        <p>"Laptop" araması için 32370 sonuç listeleniyor</p>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Önerilen Sıralama
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Önerilen Sıralama</button></li>
                                <li><button className="dropdown-item" type="button">En Düşük Fiyat</button></li>
                                <li><button className="dropdown-item" type="button">En Yüksek Fiyat</button></li>
                                <li><button className="dropdown-item" type="button">En Yeniler</button></li>
                                <li><button className="dropdown-item" type="button">En Çok Satanlar</button></li>
                                <li><button className="dropdown-item" type="button">En Çok Beğenilenler</button></li>
                                <li><button className="dropdown-item" type="button">En Çok Değerlendirilenler</button></li>
                                <li><button className="dropdown-item" type="button">Birim Fiyata Göre Sırala</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="where">
                        <p>Bilgisayarı nerede kullanacaksın?</p>
                        <div className="row row-cols-2 row-cols-md-4 buttons">
                            <div className="col">
                                <button>Ev-Okul</button>
                            </div>
                            <div className="col">
                                <button>Ofis-İş</button>
                            </div>
                            <div className="col">
                                <button>Oyun</button>
                            </div>
                            <div className="col">
                                <button>Tasarım</button>
                            </div>
                        </div>
                    </div>
                    <div className="fast">
                        <div className="svg d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#0bc15c' width={32} height={32} viewBox="0 0 640 512"><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" /></svg>
                            <p style={{ marginLeft: "10px", fontWeight: "600" }}>Hızlı Teslimat <span style={{ fontWeight: "400" }}>yapılan ürünleri göster.</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg> </p>
                        </div>
                        <button>Uygula</button>
                    </div>
                    <button className='btnn'>ÖNCEKİ ÜRÜNLERİ GÖSTER</button>
                    <Altun />
                    <CardsLaptop />
                    <Isvant />
                    <CardsLaptop />
                </div>
            </div>
        </>
    )
}

export default Right