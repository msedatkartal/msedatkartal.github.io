import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Kursiyer extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200:{
                items: 4,
            },
            1400:{
                items: 5,
            },
        },
    }
    render() {
        return (
            <>
                <div className="kursiyer-con">
                    <div className='container-fluid kursiyer text-center' >
                        <h2 style={{fontSize:"30px", margin:"0 0 20px",fontWeight:"600",letterSpacing:"1.1px"}}>Kursiyerlerimiz Anlatıyor</h2>
                        <OwlCarousel items={4} margin={8} autoplay={true} autoplayTimeout={3000} loop={true} 
                            responsive={this.state.responsive}
                            >
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-1.webp)",backgroundPosition:"center" }}>
                                <p>Cem Yasin Yıldırım</p>
                                <p>Masal Terapisi Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-2.webp)",backgroundPosition:"center" }}>
                                <p>Kübra Ergun</p>
                                <p>Oyun ve Masal Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-3.webp)",backgroundPosition:"center" }}>
                                <p>Mehmet Haytabay</p>
                                <p>Yaşam Koçluğu Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-4.webp)",backgroundPosition:"center" }}>
                                <p>Zeynep Dicle Irmak</p>
                                <p>Bebek Spa ve Masajı Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-5.webp)",backgroundPosition:"center" }}>
                                <p>Murat Barlas Tekin</p>
                                <p>Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-6.webp)",backgroundPosition:"center" }}>
                                <p>Ecem Gündüz</p>
                                <p>Oyun Terapisi Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-7.jpg)",backgroundPosition:"center" }}>
                                <p>Ayşe Albayrak</p>
                                <p>Öğrenci Koçluğu Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-8.jpg)",backgroundPosition:"center" }}>
                                <p>Tülin Gönülal</p>
                                <p>Öğrenci Koçluğu Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-9.jpg)" ,backgroundPosition:"center"}}>
                                <p>Fatih Atasay</p>
                                <p>Köpek Eğitmenliği Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-10.jpg)",backgroundPosition:"center" }}>
                                <p>Gültekin Tapan</p>
                                <p>Köpek Eğitmenliği Eğitimi Kursiyeri</p>
                            </div>
                            <div className='img-kursiyer' style={{ backgroundImage: "url(img/kursiyer/kursiyer-11.jpg)",backgroundPosition:"center" }}>
                                <p>Özge Eldemir</p>
                                <p>Köpek Eğitmenliği Eğitimi Kursiyeri</p>
                            </div>
                        </OwlCarousel>
                        <button className='buttonnn'>Tüm Yorumlar</button>
                        <div className="kursiyer-yorum d-flex justify-content-start align-items-center">
                            <div className="yorum-logo ">
                                <img src="img/kursiyer/logo.png" width={55} height={55} alt="" />
                            </div>
                            <div className="yorum-text">
                                <h6>Kursiyerler Bilginet Akademi'ye 5 yıldız üzerinden ortalama 4,8 puan veriyorlar.</h6>
                                <p>EĞİTİMLERİMİZİ, %100 MEMNUNİYETLE TAMAMLAMANIZ İÇİN TİTİZLİKLE HAZIRLIYORUZ.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}
export default Kursiyer