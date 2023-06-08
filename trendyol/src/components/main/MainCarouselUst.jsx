import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class MainCarouselUst extends Component {
    
    
    render() {
        const carousels = [
            {
                id: 0,
                imgurl: "img/carousel-ust/1.webp",
                text: "Sen De Al!"
            },
            {
                id: 1,
                imgurl: "img/carousel-ust/2.webp",
                text: "Sana Özel!"
            },
            {
                id: 2,
                imgurl: "img/carousel-ust/3.webp",
                text: "Kurumsal"
            },
            {
                id: 3,
                imgurl: "img/carousel-ust/4.webp",
                text: "Kodlar & Hizmetler"
            },
            {
                id: 4,
                imgurl: "img/carousel-ust/5.webp",
                text: "Apple"
            },
            {
                id: 5,
                imgurl: "img/carousel-ust/6.webp",
                text: "TrendyolMilla"
            },
            {
                id: 6,
                imgurl: "img/carousel-ust/7.webp",
                text: "Puma"
            },
            {
                id: 7,
                imgurl: "img/carousel-ust/8.webp",
                text: "Adidas"
            },
            {
                id: 8,
                imgurl: "img/carousel-ust/9.webp",
                text: "Xiaomi"
            },
            {
                id: 9,
                imgurl: "img/carousel-ust/10.webp",
                text: "Philips"
            },
            {
                id: 10,
                imgurl: "img/carousel-ust/11.webp",
                text: "Karaca"
            },
            {
                id: 11,
                imgurl: "img/carousel-ust/12.webp",
                text: "DYSON"
            },
            {
                id: 12,
                imgurl: "img/carousel-ust/13.webp",
                text: "Samsung"
            },
            {
                id: 13,
                imgurl: "img/carousel-ust/14.webp",
                text: "HUMMEL"
            },
            {
                id: 14,
                imgurl: "img/carousel-ust/15.webp",
                text: "U.S Polo Assn."
            },
            {
                id: 15,
                imgurl: "img/carousel-ust/16.webp",
                text: "Arzum"
            },
            {
                id: 16,
                imgurl: "img/carousel-ust/17.webp",
                text: "Vestel"
            },
            {
                id: 17,
                imgurl: "img/carousel-ust/18.webp",
                text: "Stradivarius"
            },
            {
                id: 18,
                imgurl: "img/carousel-ust/19.webp",
                text: "Nike"
            },
            {
                id: 19,
                imgurl: "img/carousel-ust/20.webp",
                text: "Emsan"
            },
            {
                id: 20,
                imgurl: "img/carousel-ust/21.webp",
                text: "Koton"
            },
            {
                id: 21,
                imgurl: "img/carousel-ust/22.webp",
                text: "Tefal"
            },
            {
                id: 22,
                imgurl: "img/carousel-ust/23.webp",
                text: "Jack & Jones"
            },
            {
                id: 23,
                imgurl: "img/carousel-ust/24.webp",
                text: "İpek Yol"
            },
            {
                id: 24,
                imgurl: "img/carousel-ust/25.webp",
                text: "Pierre Cardin"
            },
            {
                id: 25,
                imgurl: "img/carousel-ust/26.webp",
                text: "SKECHERS"
            },
            {
                id: 26,
                imgurl: "img/carousel-ust/27.webp",
                text: "Bershka"
            },
        ]
        return (
            <div>
                <div className="carouselust-con">

                    <OwlCarousel items={11} className="owl-theme"  margin={10} >
                        {
                            carousels.map(carousel=>{
                                return(
                                    <div className='box12' >
                                        <img className="img" style={{ width: "68px", height: "68px", border: "1px solid black", borderRadius: "50%" }} src={carousel.imgurl} />
                                        <p> {carousel.text} </p>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>

        )
    }
}


export default MainCarouselUst  