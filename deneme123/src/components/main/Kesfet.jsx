import React from 'react'

function Kesfet() {
    return (
        <>
            <div className="kesfet-con" style={{padding:"40px 0"}}>
                <h1 style={{ textAlign: "center",marginBottom:"40px" }}>Eğitimlerimizi keşfet!</h1>
                <div className="kesfet-fluit">
                    <div className="kesfet-text">
                        <div className="kesfet-text-1">
                            <h2>Uluslararası ISO 27001:2022 Baş Denetçi Eğitimi</h2>
                            <p>Mirze Mirzelioğlu</p>
                            <p>Baş Denetçi-Danışman-Kıdemli</p>
                            <p>Eğitmen</p>
                            <br />
                            <p>Etkin bir Bilgi Güvenliği Yönetim Sisteminin oluşturulması ve ilgili standardın baş denetçisi olmanız amacıyla hazırlanmış uluslararası ISO 27001:2022 Baş Denetçi eğitimine hemen şimdi başvur!</p>
                        </div>
                        <div className="kefset-text-2">
                            <p>Çevrimiçi 4K Videolar</p>
                            <hr />
                            <p>Canlı Yayınlar</p>
                            <hr />
                            <p>Dokümanlar</p>
                            <hr />
                            <p>Süpervizyon</p>
                        </div>
                        <div className="kesfet-text-3 d-flex">
                            <div className="saat">
                                <h4>Toplam</h4>
                                <h1 style={{fontWeight:"700",fontSize:"54px"}}>96</h1>
                                <h5>saat</h5>
                            </div>
                            <div className="img">                                
                            </div>
                        </div>
                        <button style={{width:"156px", height:"47px", background:"red",color:"white",borderRadius:"10px",border:"2px solid red"}}>EĞİTİM DETAYI</button>
                    </div>
                    <div className="kesfet-anima">
                        <div className="ust"></div>
                        <div className="alt">
                                <img src="img/niçe.webp" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Kesfet