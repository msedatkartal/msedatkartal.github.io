import React from 'react'

function WhichProg() {
    return (
        <>
            <div className="whichprog-con">
                <div className="whichprog-fluid">
                    <div className="row d-flex justify-content-center m-5">
                        <div className="col-sm-4" style={{width:"220px",height:"120px" ,background: "#191c21", padding: "30px",margin:"0 5px" }}>
                            <h1 style={{fontSize:"24px"}}>22 Eğitim</h1>
                            <p style={{color:"#d3d3d3"}}>En İyilerden</p>
                        </div>
                        <div className="col-sm-4" style={{width:"220px",height:"120px" ,background: "#191c21", padding: "30px",margin:"0 5px" }}>
                            <h1 style={{fontSize:"24px"}}>855 Ders</h1>
                            <p style={{color:"#d3d3d3"}}>Zengin ders içeriği</p>
                        </div>
                        <div className="col-sm-4" style={{width:"220px",height:"120px" ,background: "#191c21", padding: "30px",margin:"0 5px" }}>
                            <h1 style={{fontSize:"24px"}}>25 dakika</h1>
                            <p style={{color:"#d3d3d3"}}>Ortalama ders süresi</p>
                        </div>
                    </div>
                    <h2 className='mt-5'>Hangi eğitim programından yararlanmak istersiniz?</h2>
                    <h5 className='mt-4' style={{color:"#d3d3d3"}}> İlgilendiğiniz eğitimi seçin</h5>
                </div>
            </div>
        </>
    )
}

export default WhichProg