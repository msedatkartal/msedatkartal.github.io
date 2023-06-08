import React from 'react'
import { detay } from "../../assets/data"
function AsusDetay() {
    return (
        <>
            <div className="asus-detay-con">
                <div className="asus-detay-fluit">
                    <h4>Ürün Bilgileri</h4>
                    <div className="asus-detay">
                        <div className="top d-flex">
                            <div className="left">
                                <img src="img/asus/1.webp" alt="" />
                            </div>
                            <div className="right">
                                <p>ASUS Rog Strix Scar 18 G834jy-n6042 I9 13980hx 32gb 2tb Ssd Rtx4090 Dos 18" 240 Hz Qhd+ Notebook</p>
                                <ul>
                                    <li>Asus ROG Strix Scar 18 G834JY-N6042 Gaming Intel Core i9 13980HX 32 GB 2 TB SSD RTX 4090 Freedos 18" 240 Hz QHD+ Taşınabilir Bilgisayar</li>
                                    <li>Bu üründen en fazla 1 adet sipariş verilebilir. 1 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.</li>
                                    <li>Kampanya fiyatından satılmak üzere 5 adetten az stok bulunmaktadır.</li>
                                    <li>İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</li>
                                    <li>Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bot">
                            <h5>Ürün Özellikleri</h5>
                            <div className="row row-cols-1 row-cols-md-2">
                                {
                                    detay?.map(detay => {
                                        return (
                                            <div key={detay.idf} className="col">
                                                <span> {detay?.p} </span>
                                                <p> {detay?.span} </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <button class="btn w-100" type="button">
                        <a href="/">
                            <p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={19}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-exclamation-square-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                GERİ BİLDİRİM VER
                            </p>
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AsusDetay