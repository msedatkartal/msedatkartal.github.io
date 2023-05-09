import React from 'react'

function Spacial() {
    return (
        <>
            <div className="special-con">
                <div className="special">
                    <div className="special-text">
                        <h1>SİZE ÖZEL EĞİTİMLER</h1>
                        <p>Birçok alanda Türkiye'nin en iyi eğitmenlerinden sertifikalı eğitim almaya hazırmısınız?</p>
                        <div className="buttons">
                            <a href="/kayit">
                            <button style={{background:"red", color:"#ffffff", width:"156px", height:"47px",borderRadius:"5px",border:"1px solid red"}}>ŞİMDİ BAŞVUR</button>
                            </a>
                            <a href="/teacher">
                            <button style={{background:"transparent", color:"white", width:"156px", height:"47px",borderRadius:"10px",border:"1px solid transparent", marginLeft:"20px"}}>TÜM EĞİTİMLER</button>
                            </a>
                        </div>
                    </div>
                    <div className="special-img">
                        {/* <img src="../../public/img/Special/egitim-kategori-1.webp" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spacial