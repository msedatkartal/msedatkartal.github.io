import React from 'react'

function AsusSoru() {
    return (
        <>
            <div className="asus-urun-con">
                <div className="asus-urun-fluit">
                    <h4>Ürün Soru ve Cevapları</h4>
                    <div className="urun-con">
                        <div className="ust">
                            <div className="ust-sol">
                                <img src="img/asus/1.webp" alt="" />
                                <p>ASUS <span>Rog Strix Scar 18 G834jy-n6042 I9 13980hx 32gb 2tb Ssd Rtx4090 Dos 18" 240 Hz Qhd+ Notebook</span> </p>
                            </div>
                            <div className="ust-sag">
                                <p>Satıcı: <a href="">Sner Teknoloji</a> <span>9</span> </p>
                            </div>
                        </div>
                        <div className="alt">
                            <div className="cevap">
                                <p>Soru: pubg kaç fps veriyor</p>
                                <span>*** *** | 28 Mayıs 2023</span>
                                <p style={{ margin: "10px 0 0 20px" }}>Cevap: <span>Ürün en üst seviyedeki bütün oyunlar ay iyi kalitede oynatır</span> </p>
                                <span style={{ margin: "0 0 0 20px" }}>Sner Teknoloji | 33 dakika içinde cevaplandı.</span>
                            </div>
                            <a href="/">
                                <button className="btn w-100" type="button">
                                    DAHA FAZLA SATICI SORUSU GÖSTER
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsusSoru