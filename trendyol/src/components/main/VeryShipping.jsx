import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export class VeryShipping extends Component {
    render() {
        const ships = [
            {
                id: 1,
                imgurl: "img/veryshipping/1.webp",
                fast: "none",
                free: "none",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "block",
                down: "none",
                cardleft: "none",
                cardright: "none",
                textp: "rise and shine",
                textspan: "Antiperspirant Whitening Roll-on- 75ml",
                money: "99,78 TL",
                color: "#f27a1a"
            },
            {
                id: 2,
                imgurl: "img/veryshipping/2.webp",
                fast: "none",
                free: "flex",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "block",
                down: "none",
                cardleft: "none",
                cardright: "none",
                textp: "HC Care",
                textspan: "Complex Bitkisel Saç Bakım Kompleksi-100ml",
                money: "239 TL",
                color: "#f27a1a"

            },
            {
                id: 3,
                imgurl: "img/veryshipping/3.webp",
                fast: "none",
                free: "flex",
                imgleft: "img/veryshipping/yildizli.webp",
                imgleftdisplay: "block",
                down: "none",
                cardleft: "none",
                cardright: "none",
                textp: "Rexona",
                textspan: "Clinical protection Kadın Stick Deodorant Shower Clean 4 Days",
                money: "134,99 TL",
                color: "#f27a1a"
            },
            {
                id: 4,
                imgurl: "img/veryshipping/4.webp",
                fast: "flex",
                free: "none",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "block",
                down: "none",
                cardleft: "none",
                cardright: "none",
                textp: "TRENDYOLMİLLA",
                textspan: "Siyah Straight Dokuma Yüksek Bel Nervür Dikiş",
                money: "163,99 TL",
                color: "#f27a1a"
            },
            {
                id: 5,
                imgurl: "img/veryshipping/5.webp",
                fast: "none",
                free: "flex",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "block",
                down: "block",
                cardleft: "none",
                cardright: "none",
                textp: "Jakarlı",
                textspan: "Unisex Yeşil Bisiklet Yaka Pamuk Oversize Boyfriend T-shirt",
                color: "#bb0000",
                money: "48,75 TL",
            },
            {
                id: 6,
                imgurl: "img/veryshipping/6.webp",
                fast: "flex",
                free: "none",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "none",
                down: "none",
                cardleft: "none",
                cardright: "none",
                textp: "TRENDYOLMİLLA",
                textspan: "Siyah Wide Leg Dokuma Pantolon",
                color: "#f27a1a",
                money: "159,99 TL",

            },
            {
                id: 7,
                imgurl: "img/veryshipping/7.webp",
                fast: "flex",
                free: "none",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "none",
                down: "none",
                cardleft: "none",
                cardright: "block",
                textp: "JAKARLI",
                textspan: "Unisex Pamuk Siyah Bisiklet Yaka Oversize Boyfriend",
                color: "#f27a1a",
                money: "49,75 TL",
            },
            {
                id: 8,
                imgurl: "img/veryshipping/8.webp",
                fast: "none",
                free: "flex",
                imgleft: "img/veryshipping/yildizli.webp",
                imgleftdisplay: "block",
                down: "block",
                cardleft: "none",
                cardright: "none",
                textp: "NET OF NOT",
                textspan: "Siyah Tactical Ayarlanabilir Bel Paraşüt Kumaş",
                color: "#bb0000",
                money: "154 TL",
                del: "199 TL"
            },
            {
                id: 9,
                imgurl: "img/veryshipping/9.webp",
                fast: "none",
                free: "none",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "block",
                down: "none",
                cardleft: "block",
                cardright: "block",
                textp: "Monalisa",
                textspan: "Kadın 'l' boy Kahverengi Tonlar 50li'lastik Toka Seti",
                color: "#f27a1a",
                money: "19 TL",
            },
            {
                id: 10,
                imgurl: "img/veryshipping/10.webp",
                fast: "flex",
                free: "flex",
                imgleft: "img/veryshipping/en-çok-satan.webp",
                imgleftdisplay: "block",
                down: "none",
                cardleft: "none",
                cardright: "none",
                textp: "rise and shine",
                textspan: "Keratin & Kolajen Şampuan - 375 ml",
                color: "#f27a1a",
                money: "124,40 TL",
            },
        ]
        const state= {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                800: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
                1200:{
                    items: 5,
                },
                1400:{
                    items: 5,
                },
            },
        }
        return (
            <>
                <div className="very-shipping-con">
                    <div class='container-fluid' >
                        <div className="text-con d-flex">
                            <h2>Çok Satan Ürünler</h2>
                            <a href="/">Tüm Ürünler</a>
                        </div>
                        <OwlCarousel
                            items={5}
                            className="owl-theme"
                            loop={false}
                            nav margin={8}
                            responsive={state.responsive}
                        >
                            {
                                ships?.map(ship => {
                                    return (
                                        <>
                                            <a href="/">
                                                <div className="card">
                                                    <div className="card-left-top-con">
                                                        <div className="free box123" style={{ display: `${ship.free}` }}>
                                                            <svg style={{ width: "32px", height: "16px" }} xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-box" viewBox="0 0 16 16">
                                                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                                            </svg>
                                                            <p>KARGO BEDAVA</p>
                                                        </div>
                                                        <div className="fast box123" style={{ display: `${ship.fast}` }}>
                                                            <svg style={{ width: "16px", height: "16px", color: "white", position: "absolute", left: "2px" }} xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 640 512">
                                                                <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                                                            </svg>
                                                            <p>HIZLI TESLİMAT</p>
                                                        </div>
                                                        <div className="img" style={{ display: `${ship?.imgleftdisplay}` }}>
                                                            <img src={ship?.imgleft} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="card-right-top-con">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clip-rule="evenodd" d="M22.025 3.07565C22.6537 3.73057 23.1503 4.50596 23.4884 5.35646L21.1652 6.28001C20.9447 5.72527 20.623 5.22519 20.2214 4.80686L20.2207 4.80614C19.8195 4.38782 19.3466 4.05945 18.8306 3.83661C18.3147 3.61379 17.764 3.5 17.2095 3.5C16.655 3.5 16.1043 3.61379 15.5884 3.83661C15.0766 4.05763 14.6071 4.38245 14.2081 4.79588L14.2065 4.79757L13.8325 5.20061C13.3596 5.7101 12.696 5.99974 12.0009 6C11.3058 6.00026 10.642 5.71111 10.1688 5.20197L9.79403 4.79874L9.7918 4.79632C8.983 3.95874 7.90254 3.5006 6.78997 3.5006C5.67286 3.5006 4.58811 3.96249 3.77824 4.80661C2.96652 5.65265 2.5 6.813 2.5 8.03541C2.5 9.25782 2.96652 10.4182 3.77824 11.2642L11.9997 19.8334L20.2212 11.2642C20.6227 10.8459 20.9447 10.3455 21.1652 9.79081C21.3858 9.23601 21.5 8.63934 21.5 8.03541C21.5 7.43147 21.3858 6.83481 21.1652 6.28001L23.4884 5.35646C23.8265 6.20691 24 7.1171 24 8.03541C24 8.95371 23.8265 9.86391 23.4884 10.7144C23.1503 11.5648 22.6538 12.3401 22.0252 12.995L12.7213 22.6923C12.5327 22.8889 12.2721 23 11.9997 23C11.7273 23 11.4667 22.8889 11.2781 22.6923L1.97426 12.995C0.705738 11.6728 0 9.8881 0 8.03541C0 6.18272 0.705738 4.39798 1.97426 3.07582C3.24413 1.75224 4.9755 1.0006 6.78997 1.0006C8.18377 1.0006 9.52853 1.44411 10.6527 2.24969C10.9921 2.49283 11.3113 2.76895 11.6057 3.07582C11.6123 3.08271 11.6188 3.08969 11.6252 3.09677L12 3.5L12.374 3.09696C12.3805 3.08987 12.387 3.08288 12.3936 3.07599C12.6852 2.77192 13.0026 2.49653 13.3417 2.25301C13.7334 1.97168 14.154 1.73288 14.5972 1.5415C15.424 1.1844 16.3118 1 17.2095 1C18.1071 1 18.9949 1.1844 19.8218 1.5415C20.6484 1.89849 21.3967 2.4205 22.025 3.07565ZM9.77239 4.77516L9.78536 4.7893C9.78101 4.78461 9.77668 4.7799 9.77239 4.77516Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                    <img src={ship?.imgurl} class="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text" style={{ fontWeight: "bold" }}> {ship?.textp} <span style={{ fontWeight: "500" }}> {ship?.textspan} </span></p>
                                                        <div className="down-con" style={{ width: "202px", height: "18px" }}>
                                                            <div className="down" style={{ display: `${ship?.down}` }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill='#bb0000' viewBox="0 0 576 512"><path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z" />
                                                                </svg>
                                                                <p style={{ fontSize: "12px", color: "#bb0000", display: "inline", marginTop: "18px", marginLeft: "5px" }}>Son 30 Günün En Düşük Fiyatı!</p>
                                                            </div>
                                                        </div>
                                                        <del style={{ fontSize: "16px", lineHeight: "20px", color: "#878787", marginRight: "10px" }}> {ship?.del} </del>
                                                        <h5 style={{ color: `${ship?.color}`, fontWeight: "600", lineHeight: "20px", marginBottom: "11px", display: "inline" }}> {ship?.money} </h5>
                                                        <div className="card-bot-con" style={{ width: "202px", height: "29px", marginTop: "20px" }}>
                                                            <div className="card-left-bot-con" style={{ display: `${ship?.cardleft}` }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M15.6364 13.4286C15.6364 13.6258 15.4736 13.7857 15.2727 13.7857C15.0719 13.7857 14.9091 13.6258 14.9091 13.4286C14.9091 13.2313 15.0719 13.0714 15.2727 13.0714C15.4736 13.0714 15.6364 13.2313 15.6364 13.4286Z" fill="#FF4988" />
                                                                    <path d="M12.7273 10.5714C12.7273 10.7687 12.5645 10.9285 12.3636 10.9285C12.1628 10.9285 12 10.7687 12 10.5714C12 10.3742 12.1628 10.2143 12.3636 10.2143C12.5645 10.2143 12.7273 10.3742 12.7273 10.5714Z" fill="#FF4988" />
                                                                    <path fillRule="evenodd" clip-rule="evenodd" d="M18.1818 7L7.63636 7V8.07143C7.63636 8.26867 7.47356 8.42857 7.27273 8.42857C7.0719 8.42857 6.90909 8.26867 6.90909 8.07143V7H5.81818C4.81446 7.00103 4.00105 7.79992 4 8.78571L4 15.2143C4.00105 16.2001 4.81446 16.999 5.81818 17H6.90909V15.9286C6.90909 15.7313 7.0719 15.5714 7.27273 15.5714C7.47356 15.5714 7.63636 15.7313 7.63636 15.9286V17H18.1818C19.1855 16.999 19.9989 16.2001 20 15.2143V8.78571C19.9989 7.79992 19.1855 7.00103 18.1818 7ZM7.63636 14.5C7.63636 14.6972 7.47356 14.8571 7.27273 14.8571C7.0719 14.8571 6.90909 14.6972 6.90909 14.5V13.7857C6.90909 13.5885 7.0719 13.4286 7.27273 13.4286C7.47356 13.4286 7.63636 13.5885 7.63636 13.7857V14.5ZM7.27273 12.7143C7.47356 12.7143 7.63636 12.5544 7.63636 12.3571V11.6429C7.63636 11.4456 7.47356 11.2857 7.27273 11.2857C7.0719 11.2857 6.90909 11.4456 6.90909 11.6429V12.3571C6.90909 12.5544 7.0719 12.7143 7.27273 12.7143ZM7.63636 10.2143C7.63636 10.4115 7.47356 10.5714 7.27273 10.5714C7.0719 10.5714 6.90909 10.4115 6.90909 10.2143V9.5C6.90909 9.30276 7.0719 9.14286 7.27273 9.14286C7.47356 9.14286 7.63636 9.30276 7.63636 9.5V10.2143ZM13.4545 10.5714C13.4545 9.97969 12.9661 9.5 12.3636 9.5C11.7614 9.50065 11.2734 9.97996 11.2727 10.5714C11.2727 11.1632 11.7611 11.6429 12.3636 11.6429C12.9661 11.6429 13.4545 11.1632 13.4545 10.5714ZM15.2727 14.5C14.6702 14.5 14.1818 14.0203 14.1818 13.4286C14.1818 12.8368 14.6702 12.3571 15.2727 12.3571C15.8752 12.3571 16.3636 12.8368 16.3636 13.4286C16.363 14.02 15.8749 14.4994 15.2727 14.5ZM11.8935 14.3954L16.2571 10.1097C16.3509 10.0198 16.3883 9.88739 16.3549 9.76297C16.3215 9.63854 16.2226 9.54136 16.0959 9.50858C15.9692 9.4758 15.8344 9.51249 15.7429 9.60462L11.3793 13.8903C11.2403 14.0303 11.2418 14.254 11.3825 14.3922C11.5232 14.5304 11.751 14.5318 11.8935 14.3954Z" fill="#FF4988" />
                                                                </svg>
                                                                <span >30 TL Kupon</span>
                                                            </div>
                                                            <div className="card-right-bot-con" style={{ display: `${ship?.cardright}` }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M18.9954 11.0492L18.7195 6.56841V6.56855C18.6987 6.23323 18.5561 5.917 18.3185 5.67938C18.0809 5.44177 17.7647 5.2992 17.4294 5.27843L12.9489 5.00248C12.5545 4.97879 12.169 5.12541 11.8902 5.40525L5.4032 11.8922C5.14495 12.1506 5 12.5008 5 12.8661C5 13.2312 5.14494 13.5816 5.4032 13.8399L10.1601 18.5968C10.4184 18.8551 10.7688 19 11.1339 19C11.4992 19 11.8494 18.8551 12.1078 18.5968L18.5947 12.1077C18.8738 11.8284 19.0197 11.4431 18.9956 11.0489L18.9954 11.0492ZM15.7414 10.771H15.7412C15.4078 11.1044 14.9556 11.2918 14.4841 11.2918C14.0127 11.2918 13.5604 11.1045 13.2269 10.771C12.8935 10.4377 12.7062 9.98539 12.7062 9.51394C12.7062 9.04232 12.8935 8.59021 13.2269 8.25672C13.5604 7.92336 14.0127 7.73604 14.4841 7.73604C14.9556 7.73604 15.4079 7.92335 15.7412 8.25687C16.0749 8.59009 16.2623 9.04235 16.2623 9.51394C16.2623 9.98543 16.0748 10.4377 15.7412 10.771H15.7414Z" fill="#F27A1A" />
                                                                </svg>
                                                                <span>Çok Al Az Öde</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>

                                        </>

                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}


export default VeryShipping  