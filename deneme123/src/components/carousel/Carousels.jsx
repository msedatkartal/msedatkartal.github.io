import React, { useState } from 'react'
import Carousel from './Carousel';

function Carousels() {
    const carousel_list = [
        {
            id:0,
            text:"OĞUZ HAKAN AKSU İLE",
            title:"Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi",
            imgurl:"img/carosel-1.webp",
            imgurle:"img/egitmen-1.png",
            slide:"Slide 2"
        },
        {
            id:1,
            text:"HAMDİ DİLMENLER İLE",
            title:"Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi",
            imgurl:"img/carosel-2.webp",
            imgurle:"img/egitmen-2.png",
            slide:"Slide 2"
        },
        {
            id:2,
            title:"Uluslararası ISO 27001:2022 Baş Denetçi Eğitimi" ,
            text: "MİRZE MİRZEOĞLU İLE" ,
            imgurl: "img/carosel-3.webp",
            imgurle:"img/egitmen-3.png",
            slide:"Slide 3"
        },
        {
            id:3,
            title:"Uluslararası ISO 22000:2018 Baş Denetçi Eğitimi" ,
            text: "TÜLİN AY İLE" ,
            imgurl: "img/carosel-4.webp",
            imgurle:"img/egitmen-4.png",
            slide:"Slide 4"
        },
        {
            id:4,
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
            text: "HAMDİ DİLMENLER İLE" ,
            imgurl: "img/carosel-5.webp",
            imgurle:"img/egitmen-5.png",
            slide:"Slide 5"
        },
        {
            id:5,
            title:"Köpek Eğitmenliği Eğitimi" ,
            text: "ŞEMSEDDİN ŞAYAN İLE" ,
            imgurl: "img/carosel-6.webp",
            imgurle:"img/egitmen-6.png",
            slide:"Slide 6"
        },
        {
            id:6,
            title:"Köpek Eğitimi" ,
            text: "ŞEMSEDDİN ŞAYAN İLE" ,
            imgurl: "img/carosel-7.webp",
            imgurle:"img/egitmen-7.png",
            slide:"Slide 7"
        },
        {
            id:7,
            title:"Bebek Spa ve Masajı Eğitimi" ,
            text: "SEVİLAY KURT İLE" ,
            imgurl: "img/carosel-8.webp",
            imgurle:"img/egitmen-8.png",
            slide:"Slide 8"
        },
        {
            id:8,
            title:"Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi" ,
            text: "DOÇ. DR. OĞUZ DEMİR / DR. İSMAİL DURGUN İLE" ,
            imgurl: "img/carosel-9.webp",
            imgurle:"img/egitmen-9.png",
            slide:"Slide 9"
        },
        {
            id:9,
            title:"Bebek Bakımı Eğitimi" ,
            text: "GÜL ERTEM / SEVİLAY KURT İLE" ,
            imgurl: "img/carosel-10.webp",
            imgurle:"img/egitmen-10.png",
            slide:"Slide 10"
        },
        {
            id:10,
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
            text: "HÜLYA YALÇIN / DR. İSMAİL DURGUN İLE" ,
            imgurl: "img/carosel-11.webp",
            imgurle:"img/egitmen-11.png",
            slide:"Slide 11"
        },
        {
            id:11,
            title:"Oyun Terapisi Eğitimi " ,
            text: "FUNDEM ECE İLE" ,
            imgurl: "img/carosel-12.webp",
            imgurle:"img/egitmen-12.png",
            slide:"Slide 12"
        },
        {
            id:12,
            title:"Masal Terapisi Eğitimi" ,
            text: "TUĞÇE İNKAYA / MELTEM CIBIR İLE" ,
            imgurl: "img/carosel-13.webp",
            imgurle:"img/egitmen-13.png",
            slide:"Slide 13"
        },
        {
            id:13,
            title:"Öğrenci Koçluğu Eğitimi" ,
            text: "ZAFER POLAT KOYUNCU İLE" ,
            imgurl: "img/carosel-14.webp",
            imgurle:"img/egitmen-14.png",
            slide:"Slide 14"
        },
        {
            id:14,
            title:"Yaşam Koçluğu Eğitimi" ,
            text: "IŞILAY ARTUT İLE" ,
            imgurl: "img/carosel-15.webp",
            imgurle:"img/egitmen-15.png",
            slide:"Slide 15"
        },
        {
            id:15,
            title:"Robotik ve Kodlama Eğitimi" ,
            text: "ABDULLAH KILIÇASLAN / MERT GÜLER / OZAN DAMCI İLE" ,
            imgurl: "img/carosel-16.webp",
            imgurle:"img/egitmen-16.png",
            slide:"Slide 16"
        },
    ]
    // const carousel_list2 = [
    //     {
    //         id:2,
    //         title:"Hamdi Dilmenler",
    //         text:"Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi",
    //         imgurl:"../public/img/carosel-2.webp",
    //     },
    //     {
    //         id:3,
    //         title:"Uluslararası ISO 27001:2022 Baş Denetçi Eğitimi" ,
    //         text: "Mirze Mirzelioğlu" ,
    //         imgurl: "img/carosel-3.webp",
    //     },
    //     {
    //         id:4,
    //         title:"Uluslararası ISO 45001:2018 Baş Denetçi Eğitimi" ,
    //         text: "Hamdi Dilmenler" ,
    //         imgurl: "img/carosel-4.webp",
    //     },
    //     {
    //         id:5,
    //         title:"Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi" ,
    //         text: "Oğuz Hakan Aksu" ,
    //         imgurl: "img/carosel-5.webp",
    //     },
    //     {
    //         id:6,
    //         title:"Kalite Mühendisliği ve Yöneticiliği Eğitimi" ,
    //         text: "Hülya Yalçın / Dr. İsmail Durgun" ,
    //         imgurl: "img/carosel-6.webp",
    //     },
    //     {
    //         id:7,
    //         title:"Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi" ,
    //         text: "Doç.Dr.Oguz Demir / Dr.İsmail Durgun" ,
    //         imgurl: "img/carosel-7.webp",
    //     },
    //     {
    //         id:8,
    //         title:"Oyun Terapisi Eğitimi" ,
    //         text: "Fundem Ece" ,
    //         imgurl: "img/carosel-8.webp",
    //     },
    //     {
    //         id:9,
    //         title:"Masal Terapisi Eğitimi" ,
    //         text: "Tuğçe İnkaya / Meltem Cıbır" ,
    //         imgurl: "img/carosel-9.webp",
    //     },
    //     {
    //         id:10,
    //         title:"Yaşam Koçluğu Eğitimi" ,
    //         text: "Hamdi Dilmenler" ,
    //         imgurl: "img/carosel-10.webp",
    //     },
    //     {
    //         id:11,
    //         title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
    //         text: "Işılay Artut" ,
    //         imgurl: "img/carosel-11.webp",
    //     },
    //     {
    //         id:12,
    //         title:"Öğrenci Koçluğu Eğitimi" ,
    //         text: "Zafer Polat Koyuncu" ,
    //         imgurl: "img/carosel-12.webp",
    //     },
    //     {
    //         id:13,
    //         title:"Robotik ve Kodlama Eğitimi" ,
    //         text: "Abdullah Kılıçaslan / Mert Güler / Ozan Damcı" ,
    //         imgurl: "img/carosel-13.webp",
    //     },
    //     {
    //         id:14,
    //         title:"Bebek Spa ve Masajı Eğitimi" ,
    //         text: "Sevilay Kurt" ,
    //         imgurl: "img/carosel-14.webp",
    //     },
    //     {
    //         id:15,
    //         title:"Bebek Bakımı Eğitimi" ,
    //         text: "Gül Ertem / Sevilay Kurt" ,
    //         imgurl: "img/carosel-15.webp",
    //     },
    //     {
    //         id:16,
    //         title:"Köpek Eğitmenliği Eğitimi" ,
    //         text: "Şemseddin Şayan" ,
    //         imgurl: "img/carosel-16.webp",
    //     },
    // ]
    const [carousels,setCarousels] = useState(carousel_list);
    // console.log(setCarousels);
    // const [carousels2,setCarosels2] =useState(carousel_list2)
    // console.log(setCarosels2);
  return (
    <>
    <div className="row">
        {/* {
            carosels?.map(carosel =>{
                console.log(carosel);
                return(
                <div key={carosel.id}>
                    <Carosel carosel={carosel}  />
                </div>
                )
            })
        } */}
        {
            
            <Carousel carousels={carousels} />
        }
    </div>
    
    </>
  )
}

export default Carousels