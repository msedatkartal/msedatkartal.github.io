import React, { useState } from 'react'
import CardFirst from '../main/CardFirst'

function CardsFirst() {
    const cards_first = [
        {
            id:0,
            imgurl:"img/cardfirst/1.webp",
            text:"Altınbaş"
        },
        {
            id:1,
            imgurl:"img/cardfirst/2.webp",
            text:"TRENDYOLMİLLA- Yeni Sezon"
        },
        {
            id:2,
            imgurl:"img/cardfirst/3.webp",
            text:"TRENDYOLMİLLA- Partywear"
        },
        {
            id:3,
            imgurl:"img/cardfirst/4.webp",
            text:"Skechers"
        },
        {
            id:4,
            imgurl:"img/cardfirst/5.webp",
            text:"İnci"
        },
        {
            id:5,
            imgurl:"img/cardfirst/6.webp",
            text:"Stradivarius- Yeni Sezon"
        },
        {
            id:6,
            imgurl:"img/cardfirst/7.webp",
            text:"Manuka"
        },
        {
            id:7,
            imgurl:"img/cardfirst/8.webp",
            text:"Puma"
        },
        {
            id:8,
            imgurl:"img/cardfirst/9.webp",
            text:"Dünya Markalarından Seçilenler"
        },
    ]
    const [cards,setCards] = useState(cards_first)
  return (
    <>
    <div className="row">
        {
            <CardFirst cards={cards} />
        }
    </div>
    </>
  )
}

export default CardsFirst