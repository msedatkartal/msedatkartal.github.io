import React, { Component, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export class CarouselKursiyer extends Component {
    render() {
        const kursiyers = [
            {
                id: 1,
                text: "Yaşadığımız pandemi dönemi koşullarını düşünülerek uzaktan eğitim sağlayan Bilginet Akademi’nin eğitimlerine katılarak güvenilir bir kurum olduğunu deneyimledim. Eğitimler birbirinden değerli konuda ve alanında uzman eğitmenler ile birlikte hazırlanmış. Oyun Terapisi ve",
                title: "Nilay Eren   ",
                work:" Klinik Psikolog / Bursa",
                imgurl: "img/kursiyersays/nilay-eren.webp",
            },
            {
                id: 2,
                text: "Bilginet Akademi ailesine bir süre önce ‘Oyun Terapi Eğitimi’ alarak katıldım. Eğitim o kadar detaylı ve anlaşılır ki online dersleri dinlerken zamanın nasıl geçtiği anlaşılmıyor. Bütün ekip çok ilgili, her sorunuza saniyesinde geri dönüş yapılıyor. Kesinlikle tavsiye ediyorum, çok",
                title: "Betül Yılmaz",
                work:"Çocuk Gelişimi Uzmanı / Ankara",
                imgurl: "img/kursiyersays/betul-yilmaz.webp",
            },
            {
                id: 3,
                text: "Sahip olduğum özel ders kuruluşunun, yaşam ve eğitim koçluğu temel alınarak ilerlemesinde öncülük eden Bilginet Akademi ailesine ve eğitmenlerine teşekkür ederim. Eğitimlerin yoğunluğu, hızı ve etkinliği sayesinde kısa sürede uyum",
                title: "Can Ahmed Ünal",
                work:"Yaşam Koçu + Özel Ders / Ankara",
                imgurl: "img/kursiyersays/can-ahmet-unal.webp",
            },
            {
                id: 4,
                text: "Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
                title: "Ceylan Şahin",
                work:"Hemşire / Denizli",
                imgurl: "img/kursiyersays/ceylan-sahin.webp",
            },
            {
                id: 5,
                text: "'Her öğrenci bir dünyadır, bu dünyalara dokunabilme, hayallerini gerçek kılma düşüncesiyle iç disiplini, öz denetimi ve farkındalığı yüksek, kendi dünyalarının liderlerini yetiştirmeye vesile olmak çok güzel ve özel bir mutluluk kaynağıdır.' Bu mottomu destekleyen ve geliştirici bir eğitim",
                title: "Muhammed Burak Aşan",
                work:"Öğrenci Koçu / İstanbul",
                imgurl: "img/kursiyersays/muhammed-burak-asan.webp",
            },
            {
                id: 6,
                text: "Bilginet Akademi’den aldığım Oyun Terapisi Eğitimi kesinlikle beklediğim kaliteyi ve vizyonu karşıladı. Uzman eğitmenin samimiyeti beni rahatlattı. Eğitimden çok memnun kaldım. Kişisel ve akademik gelişim açısından kesinlikle tercih edilmelidir. :)",
                title: "Seda Nur Kılın",
                work:"Öğrenci / Bursa",
                imgurl: "img/kursiyersays/sedanur-kilin.webp",
            },
            {
                id: 7,
                text: "Eğitim danışmanlarının, uzman eğitmenlerin ve Bilginet Akademi’ye ait tüm ekibin müthiş bir iletişim kurabildiği eğitim platformu. Kursiyerlerini önemseyip onlar için ekstra çaba sarf eden ve büyük başarıları hak eden bir merkez burası. İyi ki Bilginet Akademi’yi seçmişim. İyi ki bu güzel",
                title: "Simay Zengin",
                work:"Kocaeli",
                imgurl: "img/kursiyersays/simay-zengin.webp",
            },
            {
                id: 8,
                text: "Masal Terapisi eğitimi almaya karar verdikten sonra bu konuda online eğitimlerle ilgili ciddi bir araştırma yaptım. Araştırmalarım sonucunda eğitimi Bilginet Akademi den almaya karar verdim. İyi ki bu kararı vermişim! Eğitim danışmanım Emir Hanım ile bu yola çıkmak en büyük",
                title: "Zülal Gündoğmuş",
                work:"Okul Öncesi Öğretmeni / İstanbul",
                imgurl: "img/kursiyersays/zulal-gundogmus.webp",
            },
            {
                id: 9,
                text: "Şahsım olarak 'Bilginet Akademi' eğitimlerini oldukça kaliteli bulmaktayım, eğitim danışmanları sorduğumuz her soruya itina ile cevap vermektedir. Eğitimler kariyerimizde bizlere farklı bakış açıları sunmaktadır. Ayrıca biz katılımcılara gösterdiğiniz ilgiden",
                title: "Birce Albasan   ",
                work:"Sınıf Öğretmeni / Ankara",
                imgurl: "img/kursiyersays/birce-albasan.webp",
            },
        ]
       
        return (
            <>
                <div className="carouselKursiyer-con w-100">
                    <h2>Kursiyerlerimiz</h2>

                    <OwlCarousel items={1} autoplay={true} autoplayTimeout={3000} loop={true} className="owl-theme">
                        {
                            kursiyers.map(kursiyer => {
                                return (
                                    <div key={kursiyer.id} className="car-con ">
                                        <div className="car-con-fluit ">
                                            <div className="car-con-text">
                                                <p> {kursiyer.text} </p>
                                                <p className='pe'> {kursiyer.title} <span style={{ color: '#a8a19f' }}> {kursiyer.work} </span> </p>
                                            </div>
                                            <div className="car-con-img">
                                                <img src= {kursiyer.imgurl} alt="" />
                                            </div>
                                        </div>
                                        {/* <button style={{ position: "relative", bottom: "60px", left: "180px", width: "140px", height: "50px", border: "1px solid white", background: "transparent", color: "white" }}>TÜM YORUMLAR</button> */}
                                    </div>

                                )
                            })
                        }

                    </OwlCarousel>
                </div>
            </>



        )
    }
}


export default CarouselKursiyer  