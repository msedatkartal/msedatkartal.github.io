import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function AsusKoleksiyon() {
    const state = {
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 2,
            },
            
        },
    }
    return (
        <>
            <div className='asus-koleksiyon-con'>
                <h4>İlginizi Çekebilecek Koleksiyonlar</h4>
                <div class='container-fluid' >
                    <OwlCarousel
                        items={2}
                        className="owl-theme"
                        loop
                        nav
                        margin={8}
                        responsive={state.responsive}
                    >
                        <div className='koleksiyon-con'>
                            <div className="left">
                                <p>Aynı Renkli Benzer Ürünler</p>
                                <span>(11 ürün)</span>
                            </div>
                            <div className="mid">
                                <img src="img/laptop/2.webp" alt="" />
                                <img src="img/laptop/3.webp" alt="" />
                                <img src="img/laptop/4.webp" alt="" />
                            </div>
                            <div className="right">
                                <button className="btn" type="button">
                                    Koleksiyona Git
                                </button>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}

export default AsusKoleksiyon