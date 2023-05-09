import React, { useState } from 'react'
import CarouselKursiyer from '../main/CarouselKursiyer'

function CarouselKursiyers() {
    const carouselkursiyer_list = [
        {
            id:1,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa',
            imgurl:"img/kursiyersays/nilay-eren.webp"
        },
        {
            id:3,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
        {
            id:4,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
        {
            id:5,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
        {
            id:6,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
        {
            id:7,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
        {
            id:8,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
        {
            id:9,
            text:"Bilginet Akademi uzman kadrosu ve güler yüzlü eğitim danışmanları ile kesinlikle fark yaratan bir eğitim kurumudur. Öncelikle Yaşam Koçluğu eğitimini aldım. Sonra eğitim danışmanımın önerisi ve mesleğime katacağı değeri düşünerek Fit Nefes Koçluğu eğitimine katıldım. Özellikle",
            title:'Nilay Eren <span style={{ color: "#a8a19f" }}>Klinik Psikolog / Bursa'
        },
    ]
    const [kursiyers,setKursiyers] = useState(carouselkursiyer_list);
  return (
    <>
        {
            <div className="row">
                <CarouselKursiyer kursiyers={kursiyers} />
            </div>
        }
    </>
  )
}

export default CarouselKursiyers