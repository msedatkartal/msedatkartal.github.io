import React from 'react'
import { useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function DemoPanel() {
    const [change, setChange] = useState(false);

    const dropDown = () => setChange((p) => !p);
    return (
        <>
            <header className="headerr">
                <button
                    className="togglebar"
                    style={{
                        background: "black",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px 16px",
                    }}
                >
                    <i className="fa-solid fa-bars" style={{ width: 12 }} />
                </button>
                <div className="drp">
                    <a
                        id="dropdown"
                        onClick={dropDown}
                        style={{ width: "171.05px", height: "41.21px", padding: 8 }}
                        href="#"
                    >
                        <span
                            style={{
                                fontSize: 14,
                                height: 16,
                                color: "#cdcdce",
                                boxShadow: "#cdcdce",
                                display: "flex",
                            }}
                        >
                            BİLGİNET AKADEMİ .
                            <img
                                style={{ width: 24, height: 24 }}
                                src="/img/logo/logo.jpg"
                                alt=""
                            />
                        </span>
                    </a>
                    <div className="drop"
                        style={{
                            display: change ? "flex" : "none",
                        }}
                    >

                        <span
                            style={{
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                padding: "5.6px 16px",
                            }}
                        >
                            Eğitimlerim
                        </span>
                        <a href="">Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi</a>
                        <a href="">Bebek Spa ve Masajı </a>
                        <a href="">Bebek Bakımı </a>
                        <a href="">Köpek Eğitimi</a>
                        <a href="">Köpek Eğitmenliği Eğitimi</a>
                        <a href="">Proje Yönetimi</a>
                        <a href="">Robotik ve Kodlama</a>
                        <a href="">Oyun Terapisi</a>
                        <a href="">Kalite Mühendisliği</a>
                        <a href="">Masal Terapisi</a>
                        <a href="">Yaşam Koçluğu</a>
                        <a href="">Öğrenci Koçluğu</a>
                    </div>
                </div>
            </header>
            <main>
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="brandlogo">
                            <img
                                src="/img/logo/ba-header-logo.svg"
                                style={{ width: 190, height: "21.3px" }}
                                alt=""
                            />
                        </div>
                        <div
                            className="headline"
                            style={{
                                height: 86,
                                flexDirection: "column",
                                display: "flex",
                                margin: "5px 0px 0px",
                                padding: "17.6px 16px",
                                borderTop: "0.9px solid rgba(255, 255, 255, 0.2)",
                                borderBottom: "0.09px solid rgba(255, 255, 255, 0.2)",
                            }}
                        >
                            <span style={{ fontSize: 16, margin: "0 0 5px" }}>
                                İyi Günler
                            </span>
                            <span
                                style={{
                                    width: 151,
                                    fontSize: 16,
                                    borderBottom: "1px solid red",
                                    margin: "0 0 5px",
                                    lineHeight: "normal",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                BİLGİNET AKADEMİ
                            </span>
                        </div>
                        <ul className="nav" style={{ marginTop: 20, left: 0 }}>
                            <li>
                                <a href="" style={{ padding: "13px 5px 13px 15px" }}>
                                    <i
                                        className="fa-solid fa-house-chimney"
                                        style={{ margin: "0px 12px 0px 0px", fontSize: 15 }}
                                    />
                                    <span style={{ fontSize: 12, textAlign: "center" }}>
                                        EĞİTİMLERİM
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{ padding: "13px 5px 13px 15px" }}>
                                    <i
                                        className="fa-solid fa-credit-card"
                                        style={{ margin: "0px 12px 0px 0px", fontSize: 15 }}
                                    />
                                    <span style={{ fontSize: 12 }}>ÖDEMELERİM</span>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{ padding: "13px 5px 13px 15px" }}>
                                    <i
                                        className="fa-solid fa-briefcase"
                                        style={{ margin: "0px 12px 0px 0px", fontSize: 15 }}
                                    />
                                    <span style={{ fontSize: 12 }}>EVRAKLARIM</span>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{ padding: "13px 5px 13px 15px" }}>
                                    <i
                                        className="fa-sharp fa-solid fa-comments"
                                        style={{ margin: "0px 12px 0px 0px", fontSize: 15 }}
                                    />
                                    <span style={{ fontSize: 12 }}>BİZE YAZIN</span>
                                </a>
                            </li>
                            <li>
                                <a href="" style={{ padding: "13px 5px 13px 15px" }}>
                                    <i
                                        className="fa fa-sign-out-alt"
                                        style={{
                                            margin: "0px 12px 0px 0px",
                                            fontSize: 15,
                                            width: 18,
                                        }}
                                    />
                                    <span style={{ fontSize: 12 }}>ÇIKIŞ</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div
                            className="screen1"
                            id="topscrool"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                borderBottom: "1px solid #cdcdce",
                                marginRight: "-15px",
                                marginLeft: "-15px",
                            }}
                        >
                            <div
                                className="sc1"
                                style={{ textAlign: "center", width: "25%" }}
                            >
                                <img
                                    src="/img/oguz_hakan_aksu/İMGİCON.webp"
                                    style={{
                                        display: "block",
                                        width: 132,
                                        height: 132,
                                        borderRadius: "50%",
                                        margin: "auto",
                                    }}
                                    alt=""
                                    className="imgicon"
                                />
                                <a
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        margin: "16px 0 0",
                                        fontWeight: 700,
                                        letterSpacing: "0.48px",
                                    }}
                                    href="#"
                                >
                                    Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi
                                </a>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                        opacity: "0.8",
                                        color: "#fff",
                                        letterSpacing: "0.06em",
                                        fontWeight: 700,
                                        fontSize: 12,
                                        marginTop: 4,
                                        lineHeight: "1.25",
                                    }}
                                >
                                    OĞUZ HAKAN AKSU
                                </h5>
                                <span
                                    style={{
                                        padding: "0 24px",
                                        fontSize: 12,
                                        opacity: "0.8",
                                        color: "#fff",
                                        marginTop: 12,
                                    }}
                                >
                                    Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi
                                    eğitimi ile siz de küresel ısınma, iklim değişikliği,
                                    biyoçeşitliliğin bozulması gibi birçok çevresel problemleri
                                    doğru bir şekilde anlayabilir ve sürdürülebilir çözümler
                                    üretebilirsiniz!
                                </span>
                                <div
                                    className="btncon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="btnc" style={{ padding: 30 }}>
                                        <div className="btn6-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn6"
                                                style={{
                                                    backgroundColor: "#d63636",
                                                    fontSize: 10,
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    padding: "10px 20px",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    borderWidth: 1,
                                                }}
                                            >
                                                VIDEOLAR
                                            </button>
                                        </div>
                                        <div className="btn7-1">
                                            <button
                                                className="btn7"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                DÖKÜMANLAR
                                            </button>
                                        </div>
                                    </div>
                                    <div className="btnc1">
                                        <div className="btn8-1" style={{ marginBottom: 10 }}>
                                            <button
                                                className="btn8"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                CANLI YAYIN
                                            </button>
                                        </div>
                                        <div className="btn9-1">
                                            <button
                                                className="btn9"
                                                style={{
                                                    color: "#fff",
                                                    display: "inline-flex",
                                                    WebkitBoxAlign: "center",
                                                    alignItems: "center",
                                                    WebkitBoxPack: "center",
                                                    justifyContent: "center",
                                                    fontWeight: 700,
                                                    lineHeight: 2,
                                                    letterSpacing: "0.12em",
                                                    padding: "10px 20px",
                                                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
                                                    fontSize: 10,
                                                    textTransform: "uppercase",
                                                    borderRadius: 4,
                                                    backgroundColor: "black",
                                                }}
                                            >
                                                SINAV
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc2" style={{ width: "75%" }}>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    navigation
                                    modules={[Navigation]}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img1.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img2.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img3.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/img/oguz_hakan_aksu/img4.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footerr">
                <div className="container">
                    <div className="center-text">
                        Her Hakkı Saklıdır © 2022 Bilginetakademi
                    </div>
                </div>
            </footer>
            <a href="#topscrool" className="go-up">
                <i className="fa-solid fa-up" style={{ color: "red !important" }} />
            </a>
        </>
    )
}

export default DemoPanel