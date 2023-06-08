import React, { useState } from 'react'
import CardBot from '../main/CardBot'

function CardsBots() {
    const cards_first = [
        {
            id:0,
            imgurl:"img/cardfirst/13.webp",
            text:"Mango- Kadın & Erkek & Çocuk"
        },
        {
            id:1,
            imgurl:"img/cardfirst/14.webp",
            text:"Trendyol Curve - Yeni Sezon"
        },
        {
            id:2,
            imgurl:"img/cardfirst/15.webp",
            text:"Trendyol Collection - Yeni Ünite"
        },
        {
            id:3,
            imgurl:"img/cardfirst/16.webp",
            text:"TRENDYOLMİLLA- Partywear"
        },
        {
            id:4,
            imgurl:"img/cardfirst/17.webp",
            text:"Dilvin - Kadın Tekstil"
        },
        {
            id:5,
            imgurl:"img/cardfirst/18.webp",
            text:"Koton- Kadın & Erkek & Çocuk"
        },
        {
            id:6,
            imgurl:"img/cardfirst/19.webp",
            text:"L'oreal Paris Makyaj Ürünleri"
        },
        {
            id:7,
            imgurl:"img/cardfirst/20.webp",
            text:"Puma"
        },
        {
            id:8,
            imgurl:"img/cardfirst/21.webp",
            text:"TRENDYOLMİLLA- Beachwear"
        },
        {
            id:9,
            imgurl:"img/cardfirst/22.webp",
            text:"Bambi"
        },
        {
            id:10,
            imgurl:"img/cardfirst/23.webp",
            text:"English Home"
        },
        {
            id:11,
            imgurl:"img/cardfirst/24.webp",
            text:"İnci"
        },
        {
            id:12,
            imgurl:"img/cardfirst/25.webp",
            text:"Cool & Sexy - Kadın Tekstil"
        },
        {
            id:13,
            imgurl:"img/cardfirst/26.webp",
            text:"Pull&Bear - Yeni Sezon"
        },
        {
            id:14,
            imgurl:"img/cardfirst/27.webp",
            text:"KişiselBakımda Sepette %10 İndirim"
        },
    ]
    const [cardbots,setCardbots] = useState(cards_first)
  return (
    <>
    <div className="row">
        {
            <CardBot cardbots={cardbots} />
        }
    </div>
    </>
  )
}

export default CardsBots