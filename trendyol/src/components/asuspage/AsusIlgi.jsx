import React from 'react'
import { lap_foot } from "../../assets/data"

function AsusIlgi() {
    return (
        <>
            <div className="asus-ilgi-con">
                <div className="asus-ilgi-fluit">
                    <h3 style={{ marginBottom: "15px" }}>Bunlar da İlginizi Çekebilir</h3>
                    <div className="row ilgi">
                        <div className="col">
                            {
                                lap_foot?.map(item => {
                                    return (
                                        <a key={item.id} href="/">
                                            <div className="boxa">
                                                {item?.title}
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <nav className='divider' aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Anasayfa</a></li>
                            <li className="breadcrumb-item"><a href="/">Elektronik</a></li>
                            <li className="breadcrumb-item"><a href="/">Bilgisayar&Tablet</a></li>
                            <li className="breadcrumb-item"><a href="/">Bilgisayar</a></li>
                            <li className="breadcrumb-item"><a href="/">Laptop</a></li>
                            <li className="breadcrumb-item active" aria-current="page" style={{ color: "#333333" }}>Asus Laptop</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default AsusIlgi