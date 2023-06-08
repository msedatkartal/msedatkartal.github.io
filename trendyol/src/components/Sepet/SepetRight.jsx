import React from 'react'

function SepetRight() {
    return (
        <>
            <div className="sepet-right-con">
                <div className="sepet-right-fluit">
                    <div className="top">
                        <button className="btn" type="button">
                            <p>
                                Sepeti Onayla
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill='white' viewBox="0 0 320 512">
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                            </p>
                        </button>
                    </div>
                    <div className="mid">
                        <h4>Sipariş Özeti</h4>
                        <div className="row row-cols-2">
                            <div className="col-8">
                                <ul>
                                    <li><span>Ürünün Toplamı</span></li>
                                    <li><span>Kargo Toplam</span></li>
                                    <li><span style={{ lineHeight: "15px", fontSize: "11px" }}>100 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span></li>

                                </ul>
                            </div>
                            <div className="col-4">
                                <ul>
                                    <li><strong>137.999 TL</strong></li>
                                    <li><strong>19,99 TL</strong></li>
                                    <li> <strong style={{color:"#f27a1a"}}>-19,99 TL</strong></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="row my-2">
                            <div className="col-7">
                                <ul>
                                    <div className="li">
                                        <div className="li-text">
                                            <p>TOPLAM İNDİRİM</p>
                                        </div>
                                        <div className="orange-text">
                                            <p>19,99 TL</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-5">
                                <ul>
                                    <li><strong style={{color:"#f27a1a",fontSize:"16px"}}>137.999 TL</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bot">
                        <button className="btn" type="button">
                            <p>
                                Sepeti Onayla
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill='white' viewBox="0 0 320 512">
                                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SepetRight