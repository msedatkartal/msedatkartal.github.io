import React from 'react'
import { useState } from 'react'
import Card from './Card'

function Cards() {
    const card_list = [
        {
            id:1,
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
            text: "Hamdi Dilmenler" ,
            imgurl: "img/portre/1.webp"
        },
        {
            id:2,
            title:"Uluslararası ISO 22000:2018 Baş Denetçi Eğitimi" ,
            text: "Tülin Ay" ,
            imgurl: "img/portre/2.webp"
        },
        {
            id:3,
            title:"Uluslararası ISO 27001:2022 Baş Denetçi Eğitimi" ,
            text: "Mirze Mirzelioğlu" ,
            imgurl: "img/portre/3.webp"
        },
        {
            id:4,
            title:"Uluslararası ISO 45001:2018 Baş Denetçi Eğitimi" ,
            text: "Hamdi Dilmenler" ,
            imgurl: "img/portre/4.webp"
        },
        {
            id:5,
            title:"Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi" ,
            text: "Oğuz Hakan Aksu" ,
            imgurl: "img/portre/5.webp"
        },
        {
            id:6,
            title:"Kalite Mühendisliği ve Yöneticiliği Eğitimi" ,
            text: "Hülya Yalçın / Dr. İsmail Durgun" ,
            imgurl: "img/portre/6.webp"
        },
        {
            id:7,
            title:"Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi" ,
            text: "Doç.Dr.Oguz Demir / Dr.İsmail Durgun" ,
            imgurl: "img/portre/7.webp"
        },
        {
            id:8,
            title:"Oyun Terapisi Eğitimi" ,
            text: "Fundem Ece" ,
            imgurl: "img/portre/8.webp"
        },
        {
            id:9,
            title:"Masal Terapisi Eğitimi" ,
            text: "Tuğçe İnkaya / Meltem Cıbır" ,
            imgurl: "img/portre/9.webp"
        },
        {
            id:10,
            title:"Yaşam Koçluğu Eğitimi" ,
            text: "Hamdi Dilmenler" ,
            imgurl: "img/portre/10.webp"
        },
        {
            id:11,
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
            text: "Işılay Artut" ,
            imgurl: "img/portre/11.webp"
        },
        {
            id:12,
            title:"Öğrenci Koçluğu Eğitimi" ,
            text: "Zafer Polat Koyuncu" ,
            imgurl: "img/portre/12.webp"
        },
        {
            id:13,
            title:"Robotik ve Kodlama Eğitimi" ,
            text: "Abdullah Kılıçaslan / Mert Güler / Ozan Damcı" ,
            imgurl: "img/portre/13.webp"
        },
        {
            id:14,
            title:"Bebek Spa ve Masajı Eğitimi" ,
            text: "Sevilay Kurt" ,
            imgurl: "img/portre/14.webp"
        },
        {
            id:15,
            title:"Bebek Bakımı Eğitimi" ,
            text: "Gül Ertem / Sevilay Kurt" ,
            imgurl: "img/portre/15.webp"
        },
        {
            id:16,
            title:"Köpek Eğitmenliği Eğitimi" ,
            text: "Şemseddin Şayan" ,
            imgurl: "img/portre/16.webp"
        },
    ]
    const [cards,setCards] = useState(card_list);
    // console.log(setCards);
  return (
    <div className='row'>
        {
            cards?.map(card =>{
                // console.log(card);
                return(
                    <div key={card.id}>
                        <Card card={card} />
                   </div>
                )
            })
        }
    </div>
  )
}

export default Cards