import React from 'react'
import AsusLeft from '../components/asuspage/AsusLeft'
import AsusRight from '../components/asuspage/AsusRight'
import AsusCarousel from '../components/asuspage/AsusCarousel'
import AsusYorum from '../components/asuspage/AsusYorum'
import AsusSoru from '../components/asuspage/AsusSoru'
import AsusDetay from '../components/asuspage/AsusDetay'
import AsusKoleksiyon from '../components/asuspage/AsusKoleksiyon'
import AsusMore from '../components/asuspage/AsusMore'
import AsusIlgi from '../components/asuspage/AsusIlgi'

function AsusLaptop() {
    return (
        <>
            <div className="asus-con">
                <div className="asus-fluit">
                    <nav className='divider' aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Anasayfa</a></li>
                            <li className="breadcrumb-item"><a href="/">Elektronik</a></li>
                            <li className="breadcrumb-item"><a href="/">Bilgisayar&Tablet</a></li>
                            <li className="breadcrumb-item"><a href="/">Bilgisayar</a></li>
                            <li className="breadcrumb-item"><a href="/">Laptop</a></li>
                            <li className="breadcrumb-item active" aria-current="page" style={{color:"#333333"}}>Asus Laptop</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-9">
                            <AsusLeft/>
                        </div>
                        <div className="col-3 display">
                            <AsusRight/>
                        </div>
                    </div>
                    <AsusCarousel/>
                    <AsusYorum/>
                    <AsusSoru/>
                    <AsusDetay/>
                    <AsusKoleksiyon/>
                    <AsusMore/>
                    <AsusIlgi/>
                </div>
                <hr />
            </div>
        </>
    )
}

export default AsusLaptop