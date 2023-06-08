import React from 'react'
import Left from '../components/laptoppage/Left'
import Right from '../components/laptoppage/Right'
import LaptopFoot from '../components/laptoppage/LaptopFoot'

function LaptopPage() {
    return (
        <>
            <div className="laptop-con">
                <div className="laptop-fluid">
                    <nav className='divider' aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Anasayfa</a></li>
                            <li className="breadcrumb-item"><a href="/">Elektronik</a></li>
                            <li className="breadcrumb-item"><a href="/">Bilgisayar&Tablet</a></li>
                            <li className="breadcrumb-item"><a href="/">Bilgisayar</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Laptop</li>
                        </ol>
                    </nav>
                    <div className="row ">
                        <div className="col-2 display">
                            <Left/>
                        </div>
                        <div className="col-9">
                            <Right/>
                        </div>
                    </div>
                    <LaptopFoot/>
                </div>
            </div>
        </>
    )
}

export default LaptopPage