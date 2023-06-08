import React from 'react'

function SepetLeft() {
    return (
        <>
            <div className="sepet-left-con">
                <div className="sepet-left-fluit">
                    <div className="sepetim">
                        <h3>Sepetim (1 Ürün)</h3>
                    </div>
                    <div className="uyelik">
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                className="bi bi-person"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            Alışverişini daha hızlı tamamlamak için
                            <a href="/">Giriş Yap</a>
                        </p>
                    </div>
                    <div className="sepet-sner">
                        <div className="ust">
                            <div className="form-check d-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                    checked
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <p>Satıcı:
                                        <b>Sner Teknoloji</b>
                                        <span>9</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 320 512">
                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                        </svg>

                                    </p>
                                </label>
                            </div>

                        </div>
                        <div className="mid text-center ">
                            <p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#0bc15c"
                                    className="bi bi-box"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                </svg>

                                Kargo Bedava!
                            </p>
                        </div>
                        <div className="bot">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                    checked
                                />
                            </div>
                            <img src="img/asus/1.webp" alt="" />
                            <div className="text">
                                <p>ASUSRog Strix Scar 18 G834jy-n6042 I9 13980hx 32gb 2tb Ssd Rtx4090 Do...</p>
                                <small>Tahmini Kargoya Teslim:2 gün içinde</small>
                            </div>
                            <div className="artir">
                                <div className="pe m-auto">
                                    <p>Son 2 Ürün!</p>
                                </div>
                                <div className="sayi d-flex">
                                    <button type="button" className="btn ">
                                        +
                                    </button>
                                    <div className="pee">
                                    <p>1</p>
                                    </div>
                                    <button type="button" className="btn">
                                        -
                                    </button>
                                </div>
                            </div>
                            <div className="money">
                                <p>137.999 TL</p>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-trash3"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SepetLeft